import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return RSVP.hash({
      publication: {},
      publicationTypes: this.store.find('publication_type')
    });
  },
  setupController: function(controller, models) {
    controller.set("model", models.publication);
    controller.set("publicationTypes", models.publicationTypes);

    var arr = [];
    controller.set('authors', arr);

    var arr2 = [];
    arr2.push(Ember.Object.create({id: '666', text: 'Extern institution'}));
    arr2.push(Ember.Object.create({id: '1798', text: 'Akademin Valand  [2012-]  1798'}));
    arr2.push(Ember.Object.create({id: '1856', text: 'Akademistatistik  [2012-]  1856'}));
    arr2.push(Ember.Object.create({id: '1783', text: 'Avdelningen för freds- och konfliktforskning  [1971-1978]  1783'}));
    arr2.push(Ember.Object.create({id: '1786', text: 'Avdelningen för freds- och utvecklingsforskning  [1986-1991]  1786'}));
    arr2.push(Ember.Object.create({id: '1221', text: 'Botaniska institutionen  [1988-2005]  1221'}));
    arr2.push(Ember.Object.create({id: '1223', text: 'Botaniska institutionen, fysiologisk botanik  [1988-2005]  1223'}));
    arr2.push(Ember.Object.create({id: '1222', text: 'Botaniska institutionen, kemisk ekologi  [1988-2005]  1222'}));
    arr2.push(Ember.Object.create({id: '1666', text: 'Botaniska institutionen, marin botanik  [1988-2001]  1666'}));
    arr2.push(Ember.Object.create({id: '1224', text: 'Botaniska institutionen, systematisk botanik  [1988-2005]  1224'}));
    arr2.push(Ember.Object.create({id: '1868', text: 'Center for Cardiovascular and Metabolic Research (CMR)  [2010-]  1868'}));
    arr2.push(Ember.Object.create({id: '1692', text: 'Centre for Bone and Arthritis Research  [2009-]  1692'}));
    arr2.push(Ember.Object.create({id: '1753', text: 'Centre for Business in Society  [2010-]  1753'}));
    arr2.push(Ember.Object.create({id: '1792', text: 'Centre for Cellular Imaging  [2003-2003]  1792'}));
    arr2.push(Ember.Object.create({id: '1754', text: 'Centre for International Business Studies  [1995-]  1754'}));
    arr2.push(Ember.Object.create({id: '1755', text: 'Centre for Retailing  [2008-]  1755'}));
    arr2.push(Ember.Object.create({id: '1323', text: 'Centrum för Europaforskning (CERGU)  [1995-]  1323'}));
    arr2.push(Ember.Object.create({id: '1637', text: 'Centrum för affärssystem (CFA) [2005-]  1637'}));
    arr2.push(Ember.Object.create({id: '1838', text: 'Centrum för etik, juridik och mental hälsa  [2012-]  1838'}));
    arr2.push(Ember.Object.create({id: '1285', text: 'Centrum för finans  [1954-]  1285'}));
    arr2.push(Ember.Object.create({id: '1321', text: 'Centrum för forskning om offentlig sektor (CEFOS)  [1992-]  1321'}));
    arr2.push(Ember.Object.create({id: '1681', text: 'Centrum för globalisering och utveckling (GCGD)  [2009-]  1681'}));
    arr2.push(Ember.Object.create({id: '1870', text: 'Centrum för hälsoekonomi (CHEGU)  [2011-]  1870'}));
    arr2.push(Ember.Object.create({id: '1286', text: 'Centrum för konsumentvetenskap (CFK)  [2001-2005]  1286'}));
    arr2.push(Ember.Object.create({id: '1311', text: 'Centrum för konsumtionsvetenskap (CFK)  [2006-]  1311'}));
    arr2.push(Ember.Object.create({id: '1801', text: 'Centrum för marin kemisk ekologi  [2012-]  1801'}));
    arr2.push(Ember.Object.create({id: '1694', text: 'Centrum för personcentrerad vård vid Göteborgs universitet (GPCC)  [2010-]  1694'}));
    arr2.push(Ember.Object.create({id: '1757', text: 'Centrum för turism  [2007-]  1757'}));
    arr2.push(Ember.Object.create({id: '1872', text: 'Centrum för åldrande och hälsa (AgeCap)  [2010-]  1872'}));
    arr2.push(Ember.Object.create({id: '1857', text: 'Core Facilities  [2003-]  1857'}));
    arr2.push(Ember.Object.create({id: '1858', text: 'Core Facilities, Bioinformatics  [2009-]  1858'}));
    arr2.push(Ember.Object.create({id: '1859', text: 'Core Facilities, Centre for Cellular Imaging  [2003-]  1859'}));
    arr2.push(Ember.Object.create({id: '1907', text: 'Core Facilities, Centre for Physiology and Bio-Imaging  [2009-]  1907'}));
    arr2.push(Ember.Object.create({id: '1860', text: 'Core Facilities, Experimentell Biomedicin  [2009-]  1860'}));
    arr2.push(Ember.Object.create({id: '1861', text: 'Core Facilities, Genomics  [2009-]  1861'}));
    arr2.push(Ember.Object.create({id: '1862', text: 'Core Facilities, Mammalian Protein Expression  [2009-]  1862'}));
    arr2.push(Ember.Object.create({id: '1863', text: 'Core Facilities, Proteomics  [2009-]  1863'}));
    arr2.push(Ember.Object.create({id: '1283', text: 'Ekonomisk-historiska institutionen  [1954-2012]  1283'}));
    arr2.push(Ember.Object.create({id: '1272', text: 'Engelska institutionen  [1954-2008]  1272'}));
    arr2.push(Ember.Object.create({id: '1324', text: 'Enheten för biblioteks- och informationsvetenskap  [1954-]  1324'}));
    arr2.push(Ember.Object.create({id: '1864', text: 'Enheten för socialmedicin                         [2006-]  1864'}));
    arr2.push(Ember.Object.create({id: '1262', text: 'Etnologiska institutionen  [1954-2008]  1262'}));
    arr2.push(Ember.Object.create({id: '1607', text: 'Externa relationer  [2006-]  1607'}));
    arr2.push(Ember.Object.create({id: '1631', text: 'Filmhögskolan  [2005-2012]  1631'}));
    arr2.push(Ember.Object.create({id: '1261', text: 'Filosofiska institutionen  [1954-2008]  1261'}));
    arr2.push(Ember.Object.create({id: '1284', text: 'Företagsekonomiska institutionen  [1954-]  1284'}));
    arr2.push(Ember.Object.create({id: '1507', text: 'Företagsekonomiska institutionen, Ekonomistyrning  [2001-2010]  1507'}));
    arr2.push(Ember.Object.create({id: '1508', text: 'Företagsekonomiska institutionen, Externredovisning och företagsanalys  [2001-2010]  1508'}));
    arr2.push(Ember.Object.create({id: '1509', text: 'Företagsekonomiska institutionen, Human Resource Management  [2001-2010]  1509'}));
    arr2.push(Ember.Object.create({id: '1750', text: 'Företagsekonomiska institutionen, Industriell och Finansiell ekonomi &amp; logistik  [2011-]  1750'}));
    arr2.push(Ember.Object.create({id: '1511', text: 'Företagsekonomiska institutionen, Industriell och finansiell ekonomi  [2001-2010]  1511'}));
    arr2.push(Ember.Object.create({id: '1512', text: 'Företagsekonomiska institutionen, Logistik och transportekonomi  [2001-2010]  1512'}));
    arr2.push(Ember.Object.create({id: '1513', text: 'Företagsekonomiska institutionen, Lärande och förändring  [2001-2010]  1513'}));
    arr2.push(Ember.Object.create({id: '1751', text: 'Företagsekonomiska institutionen, Management &amp; Organisation  [2011-]  1751'}));
    arr2.push(Ember.Object.create({id: '1514', text: 'Företagsekonomiska institutionen, Marknadsföring  [2001-]  1514'}));
    arr2.push(Ember.Object.create({id: '1752', text: 'Företagsekonomiska institutionen, Redovisning  [2011-]  1752'}));
    arr2.push(Ember.Object.create({id: '1510', text: 'Företagsekonomiska institutionen, Studier av organisation och samhälle  [2001-2010]  1510'}));
    arr2.push(Ember.Object.create({id: '1304', text: 'Förvaltningshögskolan  [1954-]  1304'}));
    arr2.push(Ember.Object.create({id: '1684', text: 'Gemensamma förvaltningen  [1954-]  1684'}));
    arr2.push(Ember.Object.create({id: '1853', text: 'Geologiska institutionen  [1954-1996]  1853'}));
    arr2.push(Ember.Object.create({id: '1773', text: 'Gillbergcentrum  [2011-]  1773'}));
    arr2.push(Ember.Object.create({id: '1291', text: 'Gothenburg Research Institute (GRI)  [1954-]  1291'}));
    arr2.push(Ember.Object.create({id: '1795', text: 'Graduate School (Handelshögskolan)  [2011-]  1795'}));
    arr2.push(Ember.Object.create({id: '1527', text: 'Göteborg Organ Art Center  [1996-]  1527'}));
    arr2.push(Ember.Object.create({id: '1341', text: 'Göteborgs miljövetenskapliga centrum, GMV  [2000-]  1341'}));
    arr2.push(Ember.Object.create({id: '1254', text: 'Göteborgs universitets marina forskningscentrum  [1989-2008]  1254'}));
    arr2.push(Ember.Object.create({id: '1487', text: 'Göteborgs universitetsbibliotek  [1961-]  1487'}));
    arr2.push(Ember.Object.create({id: '1879', text: 'Göteborgs universitetsbibliotek, Bibliotekskansliet  [1900-]  1879'}));
    arr2.push(Ember.Object.create({id: '1880', text: 'Göteborgs universitetsbibliotek, Biomedicinska biblioteken  [1900-]  1880'}));
    arr2.push(Ember.Object.create({id: '1875', text: 'Göteborgs universitetsbibliotek, Centralbiblioteket  [1900-2012]  1875'}));
    arr2.push(Ember.Object.create({id: '1876', text: 'Göteborgs universitetsbibliotek, Digitala biblioteket  [2000-2008]  1876'}));
    arr2.push(Ember.Object.create({id: '1878', text: 'Göteborgs universitetsbibliotek, Digitala tjänster  [2009-]  1878'}));
    arr2.push(Ember.Object.create({id: '1881', text: 'Göteborgs universitetsbibliotek, Ekonomiska biblioteket  [1900-2014]  1881'}));
    arr2.push(Ember.Object.create({id: '1877', text: 'Göteborgs universitetsbibliotek, Humanistiska biblioteken  [2013-]  1877'}));
    arr2.push(Ember.Object.create({id: '1882', text: 'Göteborgs universitetsbibliotek, Pedagogiska biblioteket  [1900-2014]  1882'}));
    arr2.push(Ember.Object.create({id: '1883', text: 'Göteborgs universitetsbibliotek, Samhällsvetenskapliga biblioteken  [2015-]  1883'}));
    arr2.push(Ember.Object.create({id: '1653', text: 'Göteborgs universitetsbibliotek, bibliometri  [2000-]  1653'}));
    arr2.push(Ember.Object.create({id: '1884', text: 'Hantverkslaboratoriet - Nationellt Centrum för Kulturmiljövårdens Hantverk  [2008-]  1884'}));
    arr2.push(Ember.Object.create({id: '1866', text: 'Havsmiljöinstitutet  [2008-]  1866'}));
    arr2.push(Ember.Object.create({id: '1263', text: 'Historiska institutionen  [1954-2008]  1263'}));
    arr2.push(Ember.Object.create({id: '1022', text: 'Hjärt-kärlinstitutionen  [1991-2005]  1022'}));
    arr2.push(Ember.Object.create({id: '1299', text: 'Högskolan för design och konsthantverk  [2000-]  1299'}));
    arr2.push(Ember.Object.create({id: '1632', text: 'Högskolan för fotografi  [2005-2012]  1632'}));
    arr2.push(Ember.Object.create({id: '1300', text: 'Högskolan för fotografi och film  [2000-2004]  1300'}));
    arr2.push(Ember.Object.create({id: '1633', text: 'Högskolan för scen och musik  [2005-]  1633'}));
    arr2.push(Ember.Object.create({id: '1668', text: 'Institutet för innovation och entreprenörskap  [2008-2012]  1668'}));
    arr2.push(Ember.Object.create({id: '1265', text: 'Institutet för studier av kunskapsbildning  [1954-2008]  1265'}));
    arr2.push(Ember.Object.create({id: '9', text: 'Institutionen för analytisk och marin kemi  [1980-2001]  9'}));
    arr2.push(Ember.Object.create({id: '1023', text: 'Institutionen för anatomi och cellbiologi  [1991-2005]  1023'}));
    arr2.push(Ember.Object.create({id: '1099', text: 'Institutionen för arbetsterapi och fysioterapi  [1991-2005]  1099'}));
    arr2.push(Ember.Object.create({id: '1208', text: 'Institutionen för arbetsvetenskap  [1954-2011]  1208'}));
    arr2.push(Ember.Object.create({id: '1269', text: 'Institutionen för arkeologi och antikens kultur  [1954-2008]  1269'}));
    arr2.push(Ember.Object.create({id: '43', text: 'Institutionen för beräkningsmatematik  [2002-2004]  43'}));
    arr2.push(Ember.Object.create({id: '198', text: 'Institutionen för biokemi  [1965-1977]  198'}));
    arr2.push(Ember.Object.create({id: '1780', text: 'Institutionen för biologi och miljövetenskap  [2012-]  1780'}));
    arr2.push(Ember.Object.create({id: '1906', text: 'Institutionen för biologi och miljövetenskap, Kristineberg  [2012-]  1906'}));
    arr2.push(Ember.Object.create({id: '1788', text: 'Institutionen för biologi och miljövetenskap, Tjärnö marinbiologiska laboratorium  [2012-]  1788'}));
    arr2.push(Ember.Object.create({id: '1383', text: 'Institutionen för biomedicin  [2006-]  1383'}));
    arr2.push(Ember.Object.create({id: '1608', text: 'Institutionen för biomedicin, avdelningen för infektionssjukdomar  [2006-]  1608'}));
    arr2.push(Ember.Object.create({id: '1611', text: 'Institutionen för biomedicin, avdelningen för klinisk kemi och transfusionsmedicin  [2006-]  1611'}));
    arr2.push(Ember.Object.create({id: '1612', text: 'Institutionen för biomedicin, avdelningen för medicinsk genetik och klinisk genetik  [2006-]  1612'}));
    arr2.push(Ember.Object.create({id: '1613', text: 'Institutionen för biomedicin, avdelningen för medicinsk kemi och cellbiologi  [2006-]  1613'}));
    arr2.push(Ember.Object.create({id: '1609', text: 'Institutionen för biomedicin, avdelningen för mikrobiologi och immunologi  [2006-]  1609'}));
    arr2.push(Ember.Object.create({id: '1610', text: 'Institutionen för biomedicin, avdelningen för patologi  [2006-]  1610'}));
    arr2.push(Ember.Object.create({id: '1225', text: 'Institutionen för cell- och molekylärbiologi  [1994-2011]  1225'}));
    arr2.push(Ember.Object.create({id: '1467', text: 'Institutionen för cell- och molekylärbiologi, Interface Biophysics  [1995-2011]  1467'}));
    arr2.push(Ember.Object.create({id: '1226', text: 'Institutionen för cell- och molekylärbiologi, genetik  [1994-2011]  1226'}));
    arr2.push(Ember.Object.create({id: '1228', text: 'Institutionen för cell- och molekylärbiologi, mikrobiologi  [1994-2011]  1228'}));
    arr2.push(Ember.Object.create({id: '1227', text: 'Institutionen för cell- och molekylärbiologi, molekylärbiologi  [1994-2011]  1227'}));
    arr2.push(Ember.Object.create({id: '1294', text: 'Institutionen för data- och informationsteknik (GU)  [2001-]  1294'}));
    arr2.push(Ember.Object.create({id: '1680', text: 'Institutionen för data- och informationsteknik, Interaktionsdesign (GU)  [2008-]  1680'}));
    arr2.push(Ember.Object.create({id: '1295', text: 'Institutionen för data- och informationsteknik, datavetenskap (GU)  [2001-]  1295'}));
    arr2.push(Ember.Object.create({id: '1644', text: 'Institutionen för data- och informationsteknik, datavetenskap, Interaction Design Collegium (GU)  [2005-2007]  1644'}));
    arr2.push(Ember.Object.create({id: '1665', text: 'Institutionen för data- och informationsteknik, datavetenskap, programmeringslogik (GU)  [2001-]  1665'}));
    arr2.push(Ember.Object.create({id: '1296', text: 'Institutionen för data- och informationsteknik, datorteknik (GU)  [2001-]  1296'}));
    arr2.push(Ember.Object.create({id: '1134', text: 'Institutionen för de kirurgiska disciplinerna  [1991-2005]  1134'}));
    arr2.push(Ember.Object.create({id: '1135', text: 'Institutionen för de kirurgiska disciplinerna, Avdelningen för anestesiologi och intensivvård  [1991-2005]  1135'}));
    arr2.push(Ember.Object.create({id: '1141', text: 'Institutionen för de kirurgiska disciplinerna, Avdelningen för biomaterialvetenskap  [1991-2005]  1141'}));
    arr2.push(Ember.Object.create({id: '1140', text: 'Institutionen för de kirurgiska disciplinerna, Avdelningen för gastroforskning  [1991-2005]  1140'}));
    arr2.push(Ember.Object.create({id: '1138', text: 'Institutionen för de kirurgiska disciplinerna, Avdelningen för kirurgi  [1991-2005]  1138'}));
    arr2.push(Ember.Object.create({id: '1136', text: 'Institutionen för de kirurgiska disciplinerna, Avdelningen för ortopedi  [1991-2005]  1136'}));
    arr2.push(Ember.Object.create({id: '1137', text: 'Institutionen för de kirurgiska disciplinerna, Avdelningen för plastikkirurgi  [1991-2005]  1137'}));
    arr2.push(Ember.Object.create({id: '1139', text: 'Institutionen för de kirurgiska disciplinerna, Avdelningen för urologi  [1991-2005]  1139'}));
    arr2.push(Ember.Object.create({id: '1689', text: 'Institutionen för didaktik och pedagogisk profession  [2010-]  1689'}));
    arr2.push(Ember.Object.create({id: '1799', text: 'Institutionen för ekonomi och samhälle  [2013-]  1799'}));
    arr2.push(Ember.Object.create({id: '1803', text: 'Institutionen för ekonomi och samhälle, Ekonomisk historia  [2013-]  1803'}));
    arr2.push(Ember.Object.create({id: '1839', text: 'Institutionen för ekonomi och samhälle, Gothenburg Research Institute (GRI)  [2013-2013]  1839'}));
    arr2.push(Ember.Object.create({id: '1805', text: 'Institutionen för ekonomi och samhälle, Innovation and Entrepreneurship (IIE)  [2013-]  1805'}));
    arr2.push(Ember.Object.create({id: '1806', text: 'Institutionen för ekonomi och samhälle, Kulturgeografi  [2013-]  1806'}));
    arr2.push(Ember.Object.create({id: '1657', text: 'Institutionen för filosofi, lingvistik och vetenskapsteori  [2009-]  1657'}));
    arr2.push(Ember.Object.create({id: '1303', text: 'Institutionen för freds- och utvecklingsforskning  [1991-2005]  1303'}));
    arr2.push(Ember.Object.create({id: '1784', text: 'Institutionen för fredsforskning och humanekologi  [1978-1991]  1784'}));
    arr2.push(Ember.Object.create({id: '1785', text: 'Institutionen för fredsforskning och humanekologi, avdelningen för freds- och konfliktforskning  [1978-1985]  1785'}));
    arr2.push(Ember.Object.create({id: '1787', text: 'Institutionen för fredsforskning och humanekologi, avdelningen för humanekologi  [1978-1991]  1787'}));
    arr2.push(Ember.Object.create({id: '1233', text: 'Institutionen för fysik  [2001-]  1233'}));
    arr2.push(Ember.Object.create({id: '1112', text: 'Institutionen för fysiologi och farmakologi  [1991-2005]  1112'}));
    arr2.push(Ember.Object.create({id: '1115', text: 'Institutionen för fysiologi och farmakologi, Avdelningen för farmakologi  [1991-2005]  1115'}));
    arr2.push(Ember.Object.create({id: '1116', text: 'Institutionen för fysiologi och farmakologi, Avdelningen för fysiologi  [1991-2005]  1116'}));
    arr2.push(Ember.Object.create({id: '1113', text: 'Institutionen för fysiologi och farmakologi, Avdelningen för medicinsk fysik  [1991-2005]  1113'}));
    arr2.push(Ember.Object.create({id: '1241', text: 'Institutionen för genusvetenskap  [1954-2007]  1241'}));
    arr2.push(Ember.Object.create({id: '1235', text: 'Institutionen för geovetenskaper  [1997-]  1235'}));
    arr2.push(Ember.Object.create({id: '1238', text: 'Institutionen för geovetenskaper, geografi och naturgeografi  [1997-2006]  1238'}));
    arr2.push(Ember.Object.create({id: '1239', text: 'Institutionen för geovetenskaper, geologi  [1997-2006]  1239'}));
    arr2.push(Ember.Object.create({id: '1237', text: 'Institutionen för geovetenskaper, marin geologi  [1997-2006]  1237'}));
    arr2.push(Ember.Object.create({id: '1236', text: 'Institutionen för geovetenskaper, oceanografi  [1997-2006]  1236'}));
    arr2.push(Ember.Object.create({id: '1325', text: 'Institutionen för globala studier  [2006-]  1325'}));
    arr2.push(Ember.Object.create({id: '1332', text: 'Institutionen för globala studier, afrikastudier  [2006-]  1332'}));
    arr2.push(Ember.Object.create({id: '1333', text: 'Institutionen för globala studier, asienstudier  [2006-]  1333'}));
    arr2.push(Ember.Object.create({id: '1326', text: 'Institutionen för globala studier, freds- och utvecklingsforskning  [2006-]  1326'}));
    arr2.push(Ember.Object.create({id: '1329', text: 'Institutionen för globala studier, globala genusstudier  [2006-2008]  1329'}));
    arr2.push(Ember.Object.create({id: '1328', text: 'Institutionen för globala studier, humanekologi  [2006-]  1328'}));
    arr2.push(Ember.Object.create({id: '1587', text: 'Institutionen för globala studier, iberoamerikanska institutet  [2007-]  1587'}));
    arr2.push(Ember.Object.create({id: '1331', text: 'Institutionen för globala studier, mellanösternstudier  [2006-]  1331'}));
    arr2.push(Ember.Object.create({id: '1327', text: 'Institutionen för globala studier, socialantropologi  [2006-]  1327'}));
    arr2.push(Ember.Object.create({id: '1330', text: 'Institutionen för globala studier, studiet av mänskliga rättigheter  [2006-]  1330'}));
    arr2.push(Ember.Object.create({id: '1655', text: 'Institutionen för historiska studier  [2009-]  1655'}));
    arr2.push(Ember.Object.create({id: '1207', text: 'Institutionen för hushållsvetenskap  [1954-2006]  1207'}));
    arr2.push(Ember.Object.create({id: '1264', text: 'Institutionen för idéhistoria och vetenskapsteori  [1954-2008]  1264'}));
    arr2.push(Ember.Object.create({id: '1674', text: 'Institutionen för idéhistoria och vetenskapsteori, idéhistoria  [1954-2008]  1674'}));
    arr2.push(Ember.Object.create({id: '1675', text: 'Institutionen för idéhistoria och vetenskapsteori, vetenskapsteori  [1954-2008]  1675'}));
    arr2.push(Ember.Object.create({id: '1290', text: 'Institutionen för informatik  [1954-2005]  1290'}));
    arr2.push(Ember.Object.create({id: '1679', text: 'Institutionen för informationsbehandling  [1900-1987]  1679'}));
    arr2.push(Ember.Object.create({id: '1042', text: 'Institutionen för invärtesmedicin  [1991-2005]  1042'}));
    arr2.push(Ember.Object.create({id: '1094', text: 'Institutionen för invärtesmedicin, Avdelningen för infektionssjukdomar  [1991-2005]  1094'}));
    arr2.push(Ember.Object.create({id: '1095', text: 'Institutionen för invärtesmedicin, Avdelningen för internmedicin  [1991-2005]  1095'}));
    arr2.push(Ember.Object.create({id: '1093', text: 'Institutionen för invärtesmedicin, Avdelningen för klinisk farmakologi  [1991-2005]  1093'}));
    arr2.push(Ember.Object.create({id: '1092', text: 'Institutionen för invärtesmedicin, Avdelningen för klinisk näringslära  [1991-2005]  1092'}));
    arr2.push(Ember.Object.create({id: '1091', text: 'Institutionen för invärtesmedicin, Avdelningen för kroppssammansättning och metabolism  [1991-2005]  1091'}));
    arr2.push(Ember.Object.create({id: '1097', text: 'Institutionen för invärtesmedicin, Avdelningen för lungmedicin och allergologi  [1991-2005]  1097'}));
    arr2.push(Ember.Object.create({id: '1096', text: 'Institutionen för invärtesmedicin, Avdelningen för njurmedicin  [1991-2005]  1096'}));
    arr2.push(Ember.Object.create({id: '1043', text: 'Institutionen för invärtesmedicin, Avdelningen för reumatologi och inflammationsforskning  [1991-2005]  1043'}));
    arr2.push(Ember.Object.create({id: '1305', text: 'Institutionen för journalistik, medier och kommunikation (JMG)  [1954-]  1305'}));
    arr2.push(Ember.Object.create({id: '1669', text: 'Institutionen för jämförande språkforskning med sanskrit  [1898-1999]  1669'}));
    arr2.push(Ember.Object.create({id: '1234', text: 'Institutionen för kemi  [2001-2011]  1234'}));
    arr2.push(Ember.Object.create({id: '1781', text: 'Institutionen för kemi och molekylärbiologi  [2012-]  1781'}));
    arr2.push(Ember.Object.create({id: '1024', text: 'Institutionen för klinisk neurovetenskap  [1991-2005]  1024'}));
    arr2.push(Ember.Object.create({id: '1061', text: 'Institutionen för klinisk neurovetenskap, Sektionen för kliniska nervsjukdomar  [1991-2005]  1061'}));
    arr2.push(Ember.Object.create({id: '1025', text: 'Institutionen för klinisk neurovetenskap, Sektionen för laborativ neurovetenskap  [1999-2005]  1025'}));
    arr2.push(Ember.Object.create({id: '1063', text: 'Institutionen för klinisk neurovetenskap, Sektionen för oftalmologi  [1991-2005]  1063'}));
    arr2.push(Ember.Object.create({id: '1064', text: 'Institutionen för klinisk neurovetenskap, Sektionen för psykiatri  [1991-2005]  1064'}));
    arr2.push(Ember.Object.create({id: '1062', text: 'Institutionen för klinisk neurovetenskap, Utbildningssektionen  [1991-2005]  1062'}));
    arr2.push(Ember.Object.create({id: '1386', text: 'Institutionen för kliniska vetenskaper  [2006-]  1386'}));
    arr2.push(Ember.Object.create({id: '1616', text: 'Institutionen för kliniska vetenskaper, sektionen för anestesi, biomaterial och ortopedi  [2006-]  1616'}));
    arr2.push(Ember.Object.create({id: '1760', text: 'Institutionen för kliniska vetenskaper, sektionen för anestesi, biomaterial och ortopedi, Avdelningen för biomaterialvetenskap  [2006-]  1760'}));
    arr2.push(Ember.Object.create({id: '1761', text: 'Institutionen för kliniska vetenskaper, sektionen för anestesi, biomaterial och ortopedi, Avdelningen för ortopedi  [2006-]  1761'}));
    arr2.push(Ember.Object.create({id: '1762', text: 'Institutionen för kliniska vetenskaper, sektionen för anestesi, biomaterial och ortopedi, Avdelningen för öron-, näs- och halssjukdomar  [2006-]  1762'}));
    arr2.push(Ember.Object.create({id: '1759', text: 'Institutionen för kliniska vetenskaper, sektionen för anestesi, biomaterial och ortopedi. Avdelningen för anestesiologi och intensivvård  [2006-]  1759'}));
    arr2.push(Ember.Object.create({id: '1614', text: 'Institutionen för kliniska vetenskaper, sektionen för hud, plastik och öron  [2006-2009]  1614'}));
    arr2.push(Ember.Object.create({id: '1618', text: 'Institutionen för kliniska vetenskaper, sektionen för kirurgi och kirurgisk gastroforskning  [2006-]  1618'}));
    arr2.push(Ember.Object.create({id: '1771', text: 'Institutionen för kliniska vetenskaper, sektionen för kirurgi och kirurgisk gastroforskning, Avdelningen för gastrokirurgisk forskning och utbildning  [2006-]  1771'}));
    arr2.push(Ember.Object.create({id: '1770', text: 'Institutionen för kliniska vetenskaper, sektionen för kirurgi och kirurgisk gastroforskning, Avdelningen för kirurgi  [2006-]  1770'}));
    arr2.push(Ember.Object.create({id: '1772', text: 'Institutionen för kliniska vetenskaper, sektionen för kirurgi och kirurgisk gastroforskning, Avdelningen för plastkirurgi  [2006-]  1772'}));
    arr2.push(Ember.Object.create({id: '1615', text: 'Institutionen för kliniska vetenskaper, sektionen för kvinnors och barns hälsa  [2006-]  1615'}));
    arr2.push(Ember.Object.create({id: '1763', text: 'Institutionen för kliniska vetenskaper, sektionen för kvinnors och barns hälsa, Avdelningen för obstetrik och gynekologi  [2006-]  1763'}));
    arr2.push(Ember.Object.create({id: '1764', text: 'Institutionen för kliniska vetenskaper, sektionen för kvinnors och barns hälsa, Avdelningen för pediatrik  [2006-]  1764'}));
    arr2.push(Ember.Object.create({id: '1617', text: 'Institutionen för kliniska vetenskaper, sektionen för onkologi, radiofysik, radiologi och urologi  [2006-]  1617'}));
    arr2.push(Ember.Object.create({id: '1765', text: 'Institutionen för kliniska vetenskaper, sektionen för onkologi, radiofysik, radiologi och urologi, Avdelningen för dermatologi och venereologi  [2006-]  1765'}));
    arr2.push(Ember.Object.create({id: '1766', text: 'Institutionen för kliniska vetenskaper, sektionen för onkologi, radiofysik, radiologi och urologi, Avdelningen för onkologi  [2006-]  1766'}));
    arr2.push(Ember.Object.create({id: '1767', text: 'Institutionen för kliniska vetenskaper, sektionen för onkologi, radiofysik, radiologi och urologi, Avdelningen för radiofysik  [2006-]  1767'}));
    arr2.push(Ember.Object.create({id: '1768', text: 'Institutionen för kliniska vetenskaper, sektionen för onkologi, radiofysik, radiologi och urologi, Avdelningen för radiologi  [2006-]  1768'}));
    arr2.push(Ember.Object.create({id: '1769', text: 'Institutionen för kliniska vetenskaper, sektionen för onkologi, radiofysik, radiologi och urologi, Avdelningen för urologi  [2006-]  1769'}));
    arr2.push(Ember.Object.create({id: '1266', text: 'Institutionen för konst- och bildvetenskap  [1954-2008]  1266'}));
    arr2.push(Ember.Object.create({id: '1690', text: 'Institutionen för kost- och idrottsvetenskap   [2010-]  1690'}));
    arr2.push(Ember.Object.create({id: '1271', text: 'Institutionen för kultur, estetik och medier  [1954-2008]  1271'}));
    arr2.push(Ember.Object.create({id: '1672', text: 'Institutionen för kulturgeografi och ekonomisk geografi  [2009-2012]  1672'}));
    arr2.push(Ember.Object.create({id: '1656', text: 'Institutionen för kulturvetenskaper  [2009-]  1656'}));
    arr2.push(Ember.Object.create({id: '1640', text: 'Institutionen för kulturvård  [2006-]  1640'}));
    arr2.push(Ember.Object.create({id: '1087', text: 'Institutionen för kvinnors och barns hälsa  [1991-2005]  1087'}));
    arr2.push(Ember.Object.create({id: '1088', text: 'Institutionen för kvinnors och barns hälsa, Avdelningen för barn- och ungdomspsykiatri  [1991-2005]  1088'}));
    arr2.push(Ember.Object.create({id: '1089', text: 'Institutionen för kvinnors och barns hälsa, Avdelningen för obstetrik och gynekologi  [1991-2005]  1089'}));
    arr2.push(Ember.Object.create({id: '1090', text: 'Institutionen för kvinnors och barns hälsa, Avdelningen för pediatrik  [1991-2005]  1090'}));
    arr2.push(Ember.Object.create({id: '1098', text: 'Institutionen för laboratoriemedicin  [1991-2005]  1098'}));
    arr2.push(Ember.Object.create({id: '1108', text: 'Institutionen för laboratoriemedicin , Avdelningen för patologi  [1991-2005]  1108'}));
    arr2.push(Ember.Object.create({id: '1100', text: 'Institutionen för laboratoriemedicin, Avdelningen för biomedicinsk laboratorievetenskap  [1991-2005]  1100'}));
    arr2.push(Ember.Object.create({id: '1102', text: 'Institutionen för laboratoriemedicin, Avdelningen för klinisk bakteriologi  [1991-2005]  1102'}));
    arr2.push(Ember.Object.create({id: '1105', text: 'Institutionen för laboratoriemedicin, Avdelningen för klinisk immunologi  [1991-2005]  1105'}));
    arr2.push(Ember.Object.create({id: '1103', text: 'Institutionen för laboratoriemedicin, Avdelningen för klinisk kemi/transfusionsmedicin  [1991-2005]  1103'}));
    arr2.push(Ember.Object.create({id: '1106', text: 'Institutionen för laboratoriemedicin, Avdelningen för klinisk virologi  [1991-2005]  1106'}));
    arr2.push(Ember.Object.create({id: '1282', text: 'Institutionen för lingvistik  [1954-2008]  1282'}));
    arr2.push(Ember.Object.create({id: '1658', text: 'Institutionen för litteratur, idéhistoria och religion  [2009-]  1658'}));
    arr2.push(Ember.Object.create({id: '1245', text: 'Institutionen för marin ekologi  [1963-2011]  1245'}));
    arr2.push(Ember.Object.create({id: '1905', text: 'Institutionen för marin ekologi, Kristineberg  [1963-2011]  1905'}));
    arr2.push(Ember.Object.create({id: '1252', text: 'Institutionen för marin ekologi, Tjärnö marinbiologiska laboratorium  [1963-2011]  1252'}));
    arr2.push(Ember.Object.create({id: '1407', text: 'Institutionen för mat, hälsa och miljö  [2006-2010]  1407'}));
    arr2.push(Ember.Object.create({id: '44', text: 'Institutionen för matematik  [2002-2004]  44'}));
    arr2.push(Ember.Object.create({id: '1', text: 'Institutionen för matematik  [1987-2001]  1'}));
    arr2.push(Ember.Object.create({id: '2', text: 'Institutionen för matematik, Matematik/Tillämpad matematik  [1987-2001]  2'}));
    arr2.push(Ember.Object.create({id: '3', text: 'Institutionen för matematik, Matematisk statistik  [1987-2001]  3'}));
    arr2.push(Ember.Object.create({id: '45', text: 'Institutionen för matematisk statistik  [2002-2004]  45'}));
    arr2.push(Ember.Object.create({id: '371', text: 'Institutionen för matematiska vetenskaper  [2005-]  371'}));
    arr2.push(Ember.Object.create({id: '390', text: 'Institutionen för matematiska vetenskaper, matematik  [2005-]  390'}));
    arr2.push(Ember.Object.create({id: '391', text: 'Institutionen för matematiska vetenskaper, matematisk statistik  [2005-]  391'}));
    arr2.push(Ember.Object.create({id: '1385', text: 'Institutionen för medicin  [2006-]  1385'}));
    arr2.push(Ember.Object.create({id: '1619', text: 'Institutionen för medicin, avdelningen för akut och kardiovaskulär medicin  [2006-]  1619'}));
    arr2.push(Ember.Object.create({id: '1620', text: 'Institutionen för medicin, avdelningen för invärtesmedicin  [2006-2011]  1620'}));
    arr2.push(Ember.Object.create({id: '1793', text: 'Institutionen för medicin, avdelningen för invärtesmedicin och klinisk nutrition  [2012-]  1793'}));
    arr2.push(Ember.Object.create({id: '1622', text: 'Institutionen för medicin, avdelningen för klinisk näringslära  [2006-2011]  1622'}));
    arr2.push(Ember.Object.create({id: '1623', text: 'Institutionen för medicin, avdelningen för klinisk prövning och entreprenörskap  [2006-]  1623'}));
    arr2.push(Ember.Object.create({id: '1621', text: 'Institutionen för medicin, avdelningen för molekylär och klinisk medicin  [2006-]  1621'}));
    arr2.push(Ember.Object.create({id: '1625', text: 'Institutionen för medicin, avdelningen för reumatologi och inflammationsforskning  [2006-]  1625'}));
    arr2.push(Ember.Object.create({id: '1624', text: 'Institutionen för medicin, avdelningen för samhällsmedicin och folkhälsa  [2006-]  1624'}));
    arr2.push(Ember.Object.create({id: '1840', text: 'Institutionen för medicin, avdelningen för samhällsmedicin och folkhälsa, enheten för arbets-och miljömedicin  [2006-]  1840'}));
    arr2.push(Ember.Object.create({id: '1841', text: 'Institutionen för medicin, avdelningen för samhällsmedicin och folkhälsa, enheten för folkhälsoepidemiologi  [2006-]  1841'}));
    arr2.push(Ember.Object.create({id: '1110', text: 'Institutionen för medicinsk mikrobiologi och immunologi  [1991-2005]  1110'}));
    arr2.push(Ember.Object.create({id: '1109', text: 'Institutionen för medicinsk och fysiologisk kemi  [1991-2005]  1109'}));
    arr2.push(Ember.Object.create({id: '1249', text: 'Institutionen för miljövetenskap och kulturvård  [1954-2005]  1249'}));
    arr2.push(Ember.Object.create({id: '1251', text: 'Institutionen för miljövetenskap och kulturvård, kulturvård  [1954-2005]  1251'}));
    arr2.push(Ember.Object.create({id: '1250', text: 'Institutionen för miljövetenskap och kulturvård, tillämpad miljövetenskap  [1954-2005]  1250'}));
    arr2.push(Ember.Object.create({id: '1288', text: 'Institutionen för nationalekonomi med statistik  [1954-]  1288'}));
    arr2.push(Ember.Object.create({id: '1673', text: 'Institutionen för nationalekonomi med statistik, Enheten för miljöekonomi   [1991-]  1673'}));
    arr2.push(Ember.Object.create({id: '1567', text: 'Institutionen för nationalekonomi med statistik, Statistiska forskningsenheten  [2006-]  1567'}));
    arr2.push(Ember.Object.create({id: '1384', text: 'Institutionen för neurovetenskap och fysiologi  [2006-]  1384'}));
    arr2.push(Ember.Object.create({id: '1626', text: 'Institutionen för neurovetenskap och fysiologi, sektionen för arbetsterapi, audiologi och fysioterapi  [2006-2012]  1626'}));
    arr2.push(Ember.Object.create({id: '1628', text: 'Institutionen för neurovetenskap och fysiologi, sektionen för farmakologi  [2006-]  1628'}));
    arr2.push(Ember.Object.create({id: '1627', text: 'Institutionen för neurovetenskap och fysiologi, sektionen för fysiologi  [2006-]  1627'}));
    arr2.push(Ember.Object.create({id: '1629', text: 'Institutionen för neurovetenskap och fysiologi, sektionen för klinisk neurovetenskap och rehabilitering  [2006-]  1629'}));
    arr2.push(Ember.Object.create({id: '1630', text: 'Institutionen för neurovetenskap och fysiologi, sektionen för psykiatri och neurokemi  [2006-]  1630'}));
    arr2.push(Ember.Object.create({id: '1381', text: 'Institutionen för odontologi  [2006-]  1381'}));
    arr2.push(Ember.Object.create({id: '1334', text: 'Institutionen för omvärldsstudier av människans villkor  [1954-2005]  1334'}));
    arr2.push(Ember.Object.create({id: '1335', text: 'Institutionen för omvärldsstudier av människans villkor, avdelningen för humanekologi  [1954-2005]  1335'}));
    arr2.push(Ember.Object.create({id: '1336', text: 'Institutionen för omvärldsstudier av människans villkor, centrum för afrikastudier  [1954-2005]  1336'}));
    arr2.push(Ember.Object.create({id: '1337', text: 'Institutionen för omvärldsstudier av människans villkor, centrum för asienstudier (CEAS)  [1954-2005]  1337'}));
    arr2.push(Ember.Object.create({id: '1339', text: 'Institutionen för omvärldsstudier av människans villkor, centrum för globala genusstudier  [1954-2005]  1339'}));
    arr2.push(Ember.Object.create({id: '1338', text: 'Institutionen för omvärldsstudier av människans villkor, centrum för mellanösternstudier  [1954-2005]  1338'}));
    arr2.push(Ember.Object.create({id: '1340', text: 'Institutionen för omvärldsstudier av människans villkor, centrum för studiet av mänskliga rättigheter  [1954-2005]  1340'}));
    arr2.push(Ember.Object.create({id: '1111', text: 'Institutionen för omvårdnad  [1991-2005]  1111'}));
    arr2.push(Ember.Object.create({id: '1842', text: 'Institutionen för oorganisk kemi (GU)  [1900-2000]  1842'}));
    arr2.push(Ember.Object.create({id: '1278', text: 'Institutionen för orientaliska och afrikanska språk  [1954-2008]  1278'}));
    arr2.push(Ember.Object.create({id: '1181', text: 'Institutionen för pedagogik och didaktik  [1954-2010]  1181'}));
    arr2.push(Ember.Object.create({id: '1182', text: 'Institutionen för pedagogik och didaktik, enheten för Barn- och ungdomsvetenskap  [1954-2010]  1182'}));
    arr2.push(Ember.Object.create({id: '1201', text: 'Institutionen för pedagogik och didaktik, enheten för Individ, kultur och samhälle  [1954-2010]  1201'}));
    arr2.push(Ember.Object.create({id: '1202', text: 'Institutionen för pedagogik och didaktik, enheten för Lärande i vuxenliv  [1954-2010]  1202'}));
    arr2.push(Ember.Object.create({id: '1203', text: 'Institutionen för pedagogik och didaktik, enheten för Lärande och undervisning  [1954-2010]  1203'}));
    arr2.push(Ember.Object.create({id: '1204', text: 'Institutionen för pedagogik och didaktik, enheten för Specialpedagogik  [1954-2010]  1204'}));
    arr2.push(Ember.Object.create({id: '1205', text: 'Institutionen för pedagogik och didaktik, enheten för Språk och litteratur  [1954-2010]  1205'}));
    arr2.push(Ember.Object.create({id: '1206', text: 'Institutionen för pedagogik och didaktik, enheten för Ämnesdidaktik  [1954-2010]  1206'}));
    arr2.push(Ember.Object.create({id: '1257', text: 'Institutionen för pedagogik och didaktik, idrottshögskolan  [2004-2010]  1257'}));
    arr2.push(Ember.Object.create({id: '1687', text: 'Institutionen för pedagogik och specialpedagogik   [2010-]  1687'}));
    arr2.push(Ember.Object.create({id: '1688', text: 'Institutionen för pedagogik, kommunikation och lärande   [2010-]  1688'}));
    arr2.push(Ember.Object.create({id: '1651', text: 'Institutionen för pediatrik  [1954-1992]  1651'}));
    arr2.push(Ember.Object.create({id: '1270', text: 'Institutionen för religionsvetenskap och teologi  [1954-2006]  1270'}));
    arr2.push(Ember.Object.create({id: '1638', text: 'Institutionen för religionsvetenskap, teologi och klassiska språk  [2007-2008]  1638'}));
    arr2.push(Ember.Object.create({id: '1677', text: 'Institutionen för religionsvetenskap, teologi och klassiska språk, klassiska språk  [2007-2008]  1677'}));
    arr2.push(Ember.Object.create({id: '1676', text: 'Institutionen för religionsvetenskap, teologi och klassiska språk, religionsvetenskap och teologi  [2007-2008]  1676'}));
    arr2.push(Ember.Object.create({id: '1274', text: 'Institutionen för romanska språk  [1954-2008]  1274'}));
    arr2.push(Ember.Object.create({id: '1276', text: 'Institutionen för romanska språk, avdelningen för franska och italienska  [1954-2008]  1276'}));
    arr2.push(Ember.Object.create({id: '1277', text: 'Institutionen för romanska språk, avdelningen för spanska  [1954-2008]  1277'}));
    arr2.push(Ember.Object.create({id: '1275', text: 'Institutionen för romanska språk, iberoamerikanska institutet  [1954-2006]  1275'}));
    arr2.push(Ember.Object.create({id: '1021', text: 'Institutionen för samhällsmedicin  [1991-2005]  1021'}));
    arr2.push(Ember.Object.create({id: '1081', text: 'Institutionen för samhällsmedicin, Avdelningen för allmänmedicin  [1991-2005]  1081'}));
    arr2.push(Ember.Object.create({id: '1082', text: 'Institutionen för samhällsmedicin, Avdelningen för geriatrik  [1900-2005]  1082'}));
    arr2.push(Ember.Object.create({id: '1083', text: 'Institutionen för samhällsmedicin, Avdelningen för miljömedicin  [1991-2005]  1083'}));
    arr2.push(Ember.Object.create({id: '1084', text: 'Institutionen för samhällsmedicin, Avdelningen för rehabiliteringsmedicin  [1991-2005]  1084'}));
    arr2.push(Ember.Object.create({id: '1085', text: 'Institutionen för samhällsmedicin, Avdelningen för socialmedicin  [1991-2005]  1085'}));
    arr2.push(Ember.Object.create({id: '1279', text: 'Institutionen för slaviska språk  [1954-2008]  1279'}));
    arr2.push(Ember.Object.create({id: '1307', text: 'Institutionen för socialt arbete  [1954-]  1307'}));
    arr2.push(Ember.Object.create({id: '1779', text: 'Institutionen för sociologi och arbetsvetenskap  [2012-]  1779'}));
    arr2.push(Ember.Object.create({id: '1659', text: 'Institutionen för språk och litteraturer  [2009-]  1659'}));
    arr2.push(Ember.Object.create({id: '1447', text: 'Institutionen för statistik  [1954-2002]  1447'}));
    arr2.push(Ember.Object.create({id: '1281', text: 'Institutionen för svenska språket  [1954-]  1281'}));
    arr2.push(Ember.Object.create({id: '1126', text: 'Institutionen för särskilda specialiteter  [1991-2005]  1126'}));
    arr2.push(Ember.Object.create({id: '1133', text: 'Institutionen för särskilda specialiteter, Avdelningen för audiologi  [1991-2005]  1133'}));
    arr2.push(Ember.Object.create({id: '1127', text: 'Institutionen för särskilda specialiteter, Avdelningen för dermatologi och venereologi  [1991-2005]  1127'}));
    arr2.push(Ember.Object.create({id: '1128', text: 'Institutionen för särskilda specialiteter, Avdelningen för logopedi och foniatri  [1991-2005]  1128'}));
    arr2.push(Ember.Object.create({id: '1129', text: 'Institutionen för särskilda specialiteter, Avdelningen för onkologi  [1991-2005]  1129'}));
    arr2.push(Ember.Object.create({id: '1131', text: 'Institutionen för särskilda specialiteter, Avdelningen för radiofysik  [1991-2005]  1131'}));
    arr2.push(Ember.Object.create({id: '1132', text: 'Institutionen för särskilda specialiteter, Avdelningen för radiologi  [1991-2005]  1132'}));
    arr2.push(Ember.Object.create({id: '1130', text: 'Institutionen för särskilda specialiteter, Avdelningen för öron, näs- och halssjukdomar  [1991-2005]  1130'}));
    arr2.push(Ember.Object.create({id: '1293', text: 'Institutionen för tillämpad informationsteknologi (GU)  [2001-]  1293'}));
    arr2.push(Ember.Object.create({id: '1280', text: 'Institutionen för tyska och nederländska  [1954-2008]  1280'}));
    arr2.push(Ember.Object.create({id: '1361', text: 'Institutionen för växt- och miljövetenskaper  [2006-2011]  1361'}));
    arr2.push(Ember.Object.create({id: '1086', text: 'Institutionen för vårdpedagogik  [1991-2005]  1086'}));
    arr2.push(Ember.Object.create({id: '1382', text: 'Institutionen för vårdvetenskap och hälsa  [2006-]  1382'}));
    arr2.push(Ember.Object.create({id: '1776', text: 'Jonsereds herrgård [2004-]  1776'}));
    arr2.push(Ember.Object.create({id: '1289', text: 'Juridiska institutionen  [1954-]  1289'}));
    arr2.push(Ember.Object.create({id: '1258', text: 'Klassiska institutionen  [1954-2005]  1258'}));
    arr2.push(Ember.Object.create({id: '1273', text: 'Kollegium SSKKII (-2009)  [1954-2009]  1273'}));
    arr2.push(Ember.Object.create({id: '1712', text: 'Kollegium SSKKII (2010-)  [2010-]  1712'}));
    arr2.push(Ember.Object.create({id: '1301', text: 'Konsthögskolan Valand  [2000-2012]  1301'}));
    arr2.push(Ember.Object.create({id: '1635', text: 'Konstnärliga fakultetsnämnden  [2000-]  1635'}));
    arr2.push(Ember.Object.create({id: '1682', text: 'Krefting Research Centre  [2009-]  1682'}));
    arr2.push(Ember.Object.create({id: '1287', text: 'Kulturgeografiska institutionen  [1954-2008]  1287'}));
    arr2.push(Ember.Object.create({id: '1547', text: 'Linnécentret for forskning om lärande (LinCS)  [2006-]  1547'}));
    arr2.push(Ember.Object.create({id: '1685', text: 'Linnécentrum för marin evolutionsbiologi (CEMEB)  [2008-]  1685'}));
    arr2.push(Ember.Object.create({id: '1267', text: 'Litteraturvetenskapliga institutionen  [1954-2008]  1267'}));
    arr2.push(Ember.Object.create({id: '1634', text: 'Litterär gestaltning  [2000-2012]  1634'}));
    arr2.push(Ember.Object.create({id: '1854', text: 'Maringeologiska institutionen  [1980-1996]  1854'}));
    arr2.push(Ember.Object.create({id: '1678', text: 'Matematiska institutionen  [1900-1987]  1678'}));
    arr2.push(Ember.Object.create({id: '1671', text: 'Medicinska institutionen  [1900-1990]  1671'}));
    arr2.push(Ember.Object.create({id: '1796', text: 'Mistra Urban Futures  [2010-]  1796'}));
    arr2.push(Ember.Object.create({id: '1310', text: 'Museion  [1954-]  1310'}));
    arr2.push(Ember.Object.create({id: '1302', text: 'Musikhögskolan  [2000-2004]  1302'}));
    arr2.push(Ember.Object.create({id: '1242', text: 'Nationella sekretariatet för genusforskning  [1954-]  1242'}));
    arr2.push(Ember.Object.create({id: '1342', text: 'Nationellt Centrum för matematikutbildning, NCM  [2000-]  1342'}));
    arr2.push(Ember.Object.create({id: '1855', text: 'Naturgeografiska institutionen  [1961-1996]  1855'}));
    arr2.push(Ember.Object.create({id: '1683', text: 'Naturliga material med inriktning mot Miljö- och Kulturvård (NMK)  [2000-2009]  1683'}));
    arr2.push(Ember.Object.create({id: '1322', text: 'Nordicom (-2012)  [1997-2012]  1322'}));
    arr2.push(Ember.Object.create({id: '1850', text: 'Nordicom (2013-)  [2013-]  1850'}));
    arr2.push(Ember.Object.create({id: '1869', text: 'Northern LEAD  [2008-]  1869'}));
    arr2.push(Ember.Object.create({id: '1852', text: 'Oceanografiska institutionen  [1954-1996]  1852'}));
    arr2.push(Ember.Object.create({id: '1101', text: 'Odontologiska institutionen  [1991-2005]  1101'}));
    arr2.push(Ember.Object.create({id: '1104', text: 'Odontologiska institutionen, Avdelningen för cariologi  [1991-2005]  1104'}));
    arr2.push(Ember.Object.create({id: '1107', text: 'Odontologiska institutionen, Avdelningen för endodonti med oral diagnostik  [1991-2005]  1107'}));
    arr2.push(Ember.Object.create({id: '1125', text: 'Odontologiska institutionen, Avdelningen för klinisk bettfysiologi  [1991-2005]  1125'}));
    arr2.push(Ember.Object.create({id: '1114', text: 'Odontologiska institutionen, Avdelningen för oral biokemi  [1991-2005]  1114'}));
    arr2.push(Ember.Object.create({id: '1117', text: 'Odontologiska institutionen, Avdelningen för oral mikrobiologi  [1991-2005]  1117'}));
    arr2.push(Ember.Object.create({id: '1118', text: 'Odontologiska institutionen, Avdelningen för oral och maxillofacial kirurgi  [1991-2005]  1118'}));
    arr2.push(Ember.Object.create({id: '1119', text: 'Odontologiska institutionen, Avdelningen för oral och maxillofacial radiologi  [1991-2005]  1119'}));
    arr2.push(Ember.Object.create({id: '1120', text: 'Odontologiska institutionen, Avdelningen för oral patologi  [1991-2005]  1120'}));
    arr2.push(Ember.Object.create({id: '1124', text: 'Odontologiska institutionen, Avdelningen för oral protetik/odontologisk materialvetenskap  [1991-2005]  1124'}));
    arr2.push(Ember.Object.create({id: '1121', text: 'Odontologiska institutionen, Avdelningen för ortodonti  [1991-2005]  1121'}));
    arr2.push(Ember.Object.create({id: '1123', text: 'Odontologiska institutionen, Avdelningen för parodontologi  [1991-2005]  1123'}));
    arr2.push(Ember.Object.create({id: '1122', text: 'Odontologiska institutionen, Avdelningen för pedodonti  [1991-2005]  1122'}));
    arr2.push(Ember.Object.create({id: '1298', text: 'Operahögskolan  [2000-2004]  1298'}));
    arr2.push(Ember.Object.create({id: '1741', text: 'Pedagogisk utveckling och interaktivt lärande (PIL)  [2008-]  1741'}));
    arr2.push(Ember.Object.create({id: '1814', text: 'Proteomics Core Facility  [1900-1900]  1814'}));
    arr2.push(Ember.Object.create({id: '1161', text: 'Psykologiska institutionen  [1954-]  1161'}));
    arr2.push(Ember.Object.create({id: '1639', text: 'Quality of Government Institute (QoG)  [2004-]  1639'}));
    arr2.push(Ember.Object.create({id: '1488', text: 'Rektors kansli  [1954-]  1488'}));
    arr2.push(Ember.Object.create({id: '1256', text: 'Rektorsutbildningen  [1954-]  1256'}));
    arr2.push(Ember.Object.create({id: '1797', text: 'Sahlgrenska Cancer Center  [2012-]  1797'}));
    arr2.push(Ember.Object.create({id: '1306', text: 'Socialantropologiska institutionen  [1954-2005]  1306'}));
    arr2.push(Ember.Object.create({id: '1308', text: 'Sociologiska institutionen  [1954-2011]  1308'}));
    arr2.push(Ember.Object.create({id: '1636', text: 'Sociologiska institutionen. Avdelningen för teknik- och vetenskapsstudier  [1991-2011]  1636'}));
    arr2.push(Ember.Object.create({id: '1849', text: 'Software Center  [2012-]  1849'}));
    arr2.push(Ember.Object.create({id: '1292', text: 'Statistiska forskningsenheten  [2003-2005]  1292'}));
    arr2.push(Ember.Object.create({id: '1309', text: 'Statsvetenskapliga institutionen  [1954-]  1309'}));
    arr2.push(Ember.Object.create({id: '1686', text: 'Steneby  [2010-2012]  1686'}));
    arr2.push(Ember.Object.create({id: '1867', text: 'Sven Lovén centrum för marina vetenskaper  [2008-]  1867'}));
    arr2.push(Ember.Object.create({id: '1789', text: 'Svensk nationell datatjänst (SND)  [2008-]  1789'}));
    arr2.push(Ember.Object.create({id: '1253', text: 'Svenskt NMR-centrum vid Göteborgs universitet  [1991-]  1253'}));
    arr2.push(Ember.Object.create({id: '1297', text: 'Teaterhögskolan  [2000-2004]  1297'}));
    arr2.push(Ember.Object.create({id: '1255', text: 'Utbildnings- och forskningsnämnden för lärarutbildning  [2004-]  1255'}));
    arr2.push(Ember.Object.create({id: '1871', text: 'V-Dem Institute  [2012-]  1871'}));
    arr2.push(Ember.Object.create({id: '1142', text: 'Wallenberglaboratoriet  [1991-]  1142'}));
    arr2.push(Ember.Object.create({id: '1229', text: 'Zoologiska institutionen  [1954-2011]  1229'}));
    arr2.push(Ember.Object.create({id: '1230', text: 'Zoologiska institutionen, ekologisk zoologi  [1988-2011]  1230'}));
    arr2.push(Ember.Object.create({id: '1232', text: 'Zoologiska institutionen, zoofysiologi  [1988-2011]  1232'}));
    arr2.push(Ember.Object.create({id: '1231', text: 'Zoologiska institutionen, zoomorfologi  [1988-2011]  1231'}));
    controller.set('institutions', arr2);
    
    if (models.publication) {
        if (models.publication.people) {
          if (models.publication.people.length > 0) {
            var authors = models.publication.people;
          }
        }
    }
    var tempAuthorArr = [];
    if (authors) {
        authors.forEach(function(author) {

            var departments = [];
            author.departments.forEach(function(department) {
                departments.push(Ember.Object.create({id: controller.generateUUID(), text: department.name}));
            })
            //departments.push(Ember.Object.create({id: 1, text: item.department_name}));
            tempAuthorArr.push(Ember.Object.create({id: author.id, selectedAuthor: {id: author.id, presentation_string: author.first_name}, selectedInstitution: departments}));
        }) 
    }
    else {
        var guid = controller.generateUUID();
        tempAuthorArr.push(Ember.Object.create({id: guid, selectedAuthor: null, selectedInstitution: null}));
    }
    

    controller.set('authorArr', tempAuthorArr);

  },

  actions: {


    save: function(model,is_draft) {
      var that = this;
      var successHandler = function(model) {
      //  that.modelFor('publications.manage.show').reload().then(function() {alert("hello")});
        that.send('refreshModel', model.id); // Refresh children of current model
   //     that.get('publications.manage.show').send('refreshModel', model.id);
        that.transitionTo('publications.manage.show', model.id);      
      };
      var errorHandler = function(reason) {
        console.log(reason);
        that.controller.set('hasErrors', true);
        that.controller.set('showMesgHeader', true);
        that.controller.set('errors', reason.responseJSON.errors);
        return false;
      };
      if (is_draft === 'draft'){
        model.is_draft = true;
      }else{
        model.is_draft = false;
      }
      console.log('debug: model', model);
      this.get("controller").formatAuthorsForServer();
      this.store.save('publication',model).then(successHandler, errorHandler);
    },
    hideMesgHeader: function() {
      this.controller.set('showMesgHeader', false);
      this.controller.set('hasErrors', false);
      this.controller.set('errors',''); 
    },
    refreshModel: function(modelId) {
      this.refresh(modelId);
    }

  }
});