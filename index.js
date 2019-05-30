module.exports.templateTags = [
{
	name: 'RandomTestData',    
    displayName: 'Random test data',
    description: 'Insert random test data',    
    
	args: [
		{
			displayName: 'Choose type of test data',
			type: 'enum',
			options: [
				{displayName: 'Adres in Nederland', value: 'AdressenInNederland'},
				{displayName: 'Name', value: 'Name'},
				{displayName: 'IBAN', value: 'IBAN'},
				{displayName: 'Lorum Ipsum 10', value: 'LorumIpsum10'},	
				{displayName: 'Lorum Ipsum 25', value: 'LorumIpsum25'},
				{displayName: 'Lorum Ipsum 255', value: 'LorumIpsum255'},
				{displayName: 'Plaatsen in Nederland', value: 'PlaatsenInNederland'},
				{displayName: 'Postcode in Nederland', value: 'PostcodesInNederland'},
				{displayName: 'UnicodeCities', value: 'UnicodeCities'}
				
				
			]
		}
	],
	
    run (context , datatype  ) {
		
		switch (datatype) {
			case 'AdressenInNederland':  return AdressenInNederland();
			case 'IBAN':                 return IBAN() ;
			case 'LorumIpsum10':         return LorumIpsum(10);
			case 'LorumIpsum25':         return LorumIpsum(25);
			case 'LorumIpsum255':        return LorumIpsum(255);
			case 'Name':                 return Name();
			case 'PlaatsenInNederland':  return PlaatsenInNederland();
			case 'PostcodesInNederland': return PostcodesInNederland();
			case 'UnicodeCities':        return UnicodeCities();
			default:                     return 'Error - incorrect, or non-existing value  selected ';
		}
    }

}];



function IBAN (){
var CC = 'NL';
var BC = ['ABNA', 'AEGO', 'ASNB' , 'BNPA' , 'INGB' ];
BC = BC[Math.floor(Math.random() * BC.length ) ];
var elfsum,  DIGITS ;
bNotOk = true;
while ( bNotOk ) {
     elfsum = 0;
     DIGITS = Math.floor( Math.random() * 999999999) ;
     for ( var i = 0 ; i < DIGITS.toString().length ; i ++ ) {
         elfsum += DIGITS.toString().substr(i,1) * (9 - i)  ;
     }
     bNotOk = ((elfsum % 11 ) !== 0 );
}

DIGITS = '000000000' + DIGITS  ;
DIGITS = DIGITS.substr(DIGITS.length - 10 );

var tmp = ' ';
var chk = BC + DIGITS + CC ;
var j = 0; 
for ( j = 0 ; j < chk.length ; j++ ) {
   if (chk.substr(j,1) < 65 ) {
     tmp = tmp + chk.substr(j,1);     
   }   else   {
     tmp = tmp +  ( chk.substr(j,1).charCodeAt() - 55 )  ; 
   }
}
tmp += '00';

var tmp2 = '';
var  r;
for ( i=0; i< tmp.length ; i++) {
    tmp2 += tmp.charAt( i);
    r = tmp2 % 97;
    tmp2 = r.toString( 10);
}

tmp =  tmp2 / 1;
CN = '0' + ( 98 - tmp ) ;
CN = CN.substr(CN.length - 2 );

return CC + CN + BC + DIGITS ;
}


function UnicodeCities() {
    Cities= ['København'
            , 'Göteborg','Umeå','Gävle'
            , 'רושלים','תל אביב'  ,'אילת'
            , 'Curaçao' 
            ,'上海','北京',' 深圳','成都','广州','天津','海参崴'
            ,'서울','부산','釜山','대구 광역시'
            ,'北京' ,'京都市','大阪市','広島市','奈良市'
            , 'Москва','Санкт-Петербург','Екатеринбург','Владивосток','Нижний Новгород'
            , 'मुंबaī', 'mumbəi' ,'ಬೆಂಗಳೂರು','சென்னை'
            , 'અમદાવાદ'
            , 'الرباط','مراكش ','الدار البيضاء'
            ];
    
    
    return Cities[Math.floor(Math.random() * Cities.length )] ;
    
}


function PlaatsenInNederland () {
  Places = [ 'Aa en Hunze','Aalburg','Aalsmeer','Aalten','Achtkarspelen','Alblasserdam'      
            ,'Albrandswaard','Alkmaar','Almelo','Almere','Alphen aan den Rijn','Alphen-Chaam'
            ,'Ameland','Amersfoort','Amstelveen','Amsterdam','Apeldoorn','Appingedam','Arnhem'
            ,'Assen','Asten','Baarle-Nassau','Baarn','Barendrecht','Barneveld','Bedum','Beek'
            ,'Beemster','Beesel','Berg en Dal','Bergeijk','Bergen (L.)','Bergen (NH.)','Bergen op Zoom'
            ,'Berkelland','Bernheze','Best','Beuningen','Beverwijk','De Bilt'
            ,'Binnenmaas','Bladel','Blaricum','Bloemendaal','Bodegraven-Reeuwijk','Boekel'
            ,'Ten Boer','Borger-Odoorn','Borne','Borsele','Boxmeer','Boxtel'
            ,'Breda','Brielle','Bronckhorst','Brummen','Brunssum','Bunnik'
            ,'Bunschoten','Buren','Capelle aan den IJssel','Castricum','Coevorden','Cranendonck'
            ,'Cromstrijen','Cuijk','Culemborg','Dalfsen','Dantumadiel','Delft'
            ,'Delfzijl','Deurne','Deventer','Diemen','Dinkelland','Doesburg'
            ,'Doetinchem','Dongen','Dongeradeel','Dordrecht','Drechterland','Drimmelen'
            ,'Dronten','Druten','Duiven','Echt-Susteren','Edam-Volendam','Ede'
            ,'Eemnes','Eemsmond','Eersel','Eijsden-Margraten','Eindhoven','Elburg'
            ,'Emmen','Enkhuizen','Enschede','Epe','Ermelo','Etten-Leur'
            ,'Ferwerderadiel','De Fryske Marren','Geertruidenberg','Geldermalsen','Geldrop-Mierlo','Gemert-Bakel'
            ,'Gennep','Giessenlanden','Gilze en Rijen','Goeree-Overflakkee','Goes','Goirle'
            ,'Gooise Meren','Gorinchem','Gouda','Grave','s-Gravenhage','Groningen'
            ,'Grootegast','Gulpen-Wittem','Haaksbergen','Haaren','Haarlem','Haarlemmerliede en Spaarnwoude'
            ,'Haarlemmermeer','Halderberge','Hardenberg','Harderwijk','Hardinxveld-Giessendam','Haren'
            ,'Harlingen','Hattem','Heemskerk','Heemstede','Heerde','Heerenveen'
            ,'Heerhugowaard','Heerlen','Heeze-Leende','Heiloo','Den Helder','Hellendoorn'
            ,'Hellevoetsluis','Helmond','Hendrik-Ido-Ambacht','Hengelo','s-Hertogenbosch','Heumen'
            ,'Heusden','Hillegom','Hilvarenbeek','Hilversum','Hof van Twente','Hollands Kroon'
            ,'Hoogeveen','Hoorn','Horst aan de Maas','Houten','Huizen','Hulst'
            ,'IJsselstein','Kaag en Braassem','Kampen','Kapelle','Katwijk','Kerkrade'
            ,'Koggenland','Kollumerland en Nieuwkruisland','Korendijk','Krimpen aan den IJssel','Krimpenerwaard','Laarbeek'
            ,'Landerd','Landgraaf','Landsmeer','Langedijk','Lansingerland','Laren'
            ,'Leek','Leerdam','Leeuwarden','Leiden','Leiderdorp','Leidschendam-Voorburg'
            ,'Lelystad','Leudal','Leusden','Lingewaal','Lingewaard','Lisse'
            ,'Lochem','Loon op Zand','Lopik','Loppersum','Losser','Maasdriel'
            ,'Maasgouw','Maassluis','Maastricht','De Marne','Marum','Medemblik'
            ,'Meerssen','Meierijstad','Meppel','Middelburg','Midden-Delfland','Midden-Drenthe'
            ,'Midden-Groningen','Mill en Sint Hubert','Moerdijk','Molenwaard','Montferland','Montfoort'
            ,'Mook en Middelaar','Neder-Betuwe','Nederweert','Neerijnen','Nieuwegein','Nieuwkoop'
            ,'Nijkerk','Nijmegen','Nissewaard','Noord-Beveland','Noordenveld','Noordoostpolder'
            ,'Noordwijk','Noordwijkerhout','Nuene, Gerwen en Nederwetten','Nunspeet','Nuth'
            ,'Oegstgeest','Oirschot','Oisterwijk','Oldambt','Oldebroek','Oldenzaal'
            ,'Olst-Wijhe','Ommen','Onderbanken','Oost Gelre','Oosterhout','Ooststellingwerf'
            ,'Oostzaan','Opmeer','Opsterland','Oss','Oud-Beijerland','Oude IJsselstreek'
            ,'Ouder-Amstel','Oudewater','Overbetuwe','Papendrecht','Peel en Maas','Pekela'
            ,'Pijnacker-Nootdorp','Purmerend','Putten','Raalte','Reimerswaal','Renkum'
            ,'Renswoude','Reusel-De Mierden','Rheden','Rhenen','Ridderkerk','Rijssen-Holten'
            ,'Rijswijk','Roerdalen','Roermond','De Ronde Venen','Roosendaal','Rotterdam'
            ,'Rozendaal','Rucphen','Schagen','Scherpenzeel','Schiedam','Schiermonnikoog'
            ,'Schinnen','Schouwen-Duiveland','Simpelveld','Sint Anthonis','Sint-Michielsgestel'
            ,'Sittard-Geleen'
            ,'Sliedrecht','Sluis','Smallingerland','Soest','Someren','Son en Breugel'
            ,'Stadskanaal','Staphorst','Stede Broec','Steenbergen','Steenwijkerland','Stein'
            ,'Stichtse Vecht','Strijen','Súdwest-Fryslân','Terneuzen','Terschelling','Texel'
            ,'Teylingen','Tholen','Tiel','Tilburg','Tubbergen','Twenterand'
            ,'Tynaarlo','Tytsjerksteradiel','Uden','Uitgeest','Uithoorn','Urk'
            ,'Utrecht','Utrechtse Heuvelrug','Vaals','Valkenburg aan de Geul','Valkenswaard','Veendam'
            ,'Veenendaal','Veere','Veldhoven','Velsen','Venlo','Venray'
            ,'Vianen','Vlaardingen','Vlieland','Vlissingen','Voerendaal','Voorschoten'
            ,'Voorst','Vught','Waadhoeke','Waalre','Waalwijk','Waddinxveen'
            ,'Wageningen','Wassenaar','Waterland','Weert','Weesp','Werkendam'
            ,'West Maas en Waal','Westerveld','Westervoort','Westerwolde','Westland','Weststellingwerf'
            ,'Westvoorne','Wierden','Wijchen','Wijdemeren','Wijk bij Duurstede','Winsum'
            ,'Winterswijk','Woensdrecht','Woerden','De Wolden','Wormerland','Woudenberg'
            ,'Woudrichem','Zaanstad','Zaltbommel','Zandvoort','Zederik','Zeewolde'
            ,'Zeist','Zevenaar','Zoetermeer','Zoeterwoude','Zuidhorn','Zuidplas'
            ,'Zundert','Zutphen','Zwartewaterland','Zwijndrech','Zwolle'    ];
          
      return Places[Math.floor(Math.random() * Places.length )] ;
}


function LorumIpsum (maxlength)  {
      Words = ['mauris','iaculis','felis','purus', 'et','varius','lectus','tempus','sed',
               'non','semper','mi','ac','porta','augue','ondimentum','purus','ut','urna', 
               'pulvinar','magna','euismod','posuere','ante','in','quam','laoreet','placerat',
               'labitur',  'feugiat',  'civibus', 'platonem', 'consequuntur',  'vix',  'ei',  
               'mauris' ,'dapibus', 'pulvinar','porta', 'aliquam', 'hendrerit', 'mauris', 
               'viverra', 'tincidunt', 'interdum', 'dui', 'libero' ,'luctus' , 'dui'
               ,'sagittis', 'varius' , ', est' , 'augue' , ', et', ', in'
               ];
               
      PunctuationMarks = [' ',' ',' ',' ',' ',' ',' ',' ',' ',', ',', '];
      var LorumIpsum = 'Lorum ipsum';
      var Continue = true ;
      while ( Continue  ) {
          var Word = Words[Math.floor(Math.random() * Words.length )] + 
                     PunctuationMarks[Math.floor(Math.random() * PunctuationMarks.length )]  ;
          Continue = ((LorumIpsum.length + Word.length + 1 ) <= maxlength );
          if (Continue )  {
              LorumIpsum += Word ;
          } else {
              LorumIpsum += '.';
          }
      }
      return LorumIpsum;
}


function AdressenInNederland (){
 var Names = ['Appelboom','Beukenboom','Berkenboom','Dennenboom','Iep','Eikenboom','Kastanjeboom'                 ,'Kersenboom','Perenboom', 'Wilg','Cypres','Ceder',
              'Anjer', 'Margriet', 'Rozen','Sneeuwklokjes','Tulpen','Vergeetmeniet','Zonnenbloem',
              'Jupiter', 'Mercurius','Maan', 'Mars', 'Saturnus', 'Uranus', 'Venus' , 'Zon',
              'Einstein','Edison','Tesla','Newton','Celcius','Kelvin','Pasteur',
              'Arieh Warshel ','Michael Levitt ','Daniel Shechtman ','Ada Yonath ',
              'Aaron Ciechanover ','Avram Hershko ','Yitzchak Rabin ','Shimon Peres ',
              'Menachem Begin','Sjmoeël Joseef Agnon'
              ];
 var Types = ['laan', 'plein', 'straat' , 'straat'];

 var Name = Names[Math.floor(Math.random() * Names.length )] ;
 var Type = Types[Math.floor(Math.random() * Types.length )] ;
 var Number = Math.round(Math.random() *  200,0);
 
 return Name + Type + ' ' + Number ;
 
}


function PostcodesInNederland (){
 var Number = 1000 + Math.round(Math.random() *  8000,0);
 var Txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
 return Number + ' ' + Txt.substr(Math.random() * 26,1)  + Txt.substr(Math.random() *26, 1) ;
}


function firstName(){
  var FN = ['Mark','Charles','Wiliam','George','Jack','James','H.C.','Isaac'
           , 'Edgar Ellan' ,'Fjoder','Lev','Aleksander','Heinrich','Franz','Aleksandr'
           , 'Remco','Anton','Umberto','Leon','Ray'];
  return  FN[Math.floor( FN.length * Math.random ())] ;
}

function surName(){
  var LN = ['Twain','Dickens','Shakespear','Orwell','Vance','Baldwin','Wells','Asimov'
           ,'Poe','Tolstoj','Poeskin','Böll','Kafka','Solzhenitsyn'
           ,'Campert','Tjechov','Eco','de Winter','Kurzweil'];
  return  LN[Math.floor( LN.length * Math.random ())] ;
}

function Name(){
  return  firstName() + ' ' + surName()  ;
}

