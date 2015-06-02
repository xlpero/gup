class User < ActiveRecord::Base
  validates_presence_of :username, :message => "sdfsdf"
  validates_presence_of :first_name
  validates_presence_of :last_name
  validates_presence_of :role
  validate :role_valid
  validate :username_valid

  has_many :access_tokens

  # Validates that role exists in config file
  def role_valid
    if !Rails.application.config.roles.find{|role| role[:name] == self.role}
      errors.add(:role, "Role does not exist in config")
      errors.add(:role, "#{I18n.t "errors.models.user.role.invalid"}")

    end
  end

  def username_valid
    if username && username[/^\d+$/]
      errors.add(:username, "#{I18n.t "errors.models.user.username.numeric"}")
    end

    if username && !username[/^[a-zA-Z0-9]+$/]
      errors.add(:username, "#{I18n.t "errors.models.user.username.alphanumeric"}")
    end
  end

  # Authenticate user
  def authenticate(provided_password)
    # Check if we have id. If we do not have id, the user does not exist locally,
    # and should only be allowed if starting with 'x'
    return false if !self.id && !self.username[/^x/]

    uri = URI(Rails.application.config.services[:session][:auth] + "/" + self.username)
    params = { :password => provided_password }
    uri.query = URI.encode_www_form(params)
    res = Net::HTTP.get_response(uri)
    json_response = JSON.parse(res.body) if res.is_a?(Net::HTTPSuccess)
    if(json_response["auth"]["yesno"])
      token_object = AccessToken.generate_token(self)
      return token_object.token
    end
    false
  end
end
