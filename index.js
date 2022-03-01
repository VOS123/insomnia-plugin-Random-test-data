
module.exports.templateTags = [
{
	  name: 'Adres',    
    displayName: 'Random adressen in Nederland',
    description: 'Creer willekeurige Nederlandse adressen.',        
	  args: [
		{
			displayName: 'Nederlands',
			type: 'enum',
			options: [
				{displayName: 'Huisnummers',         value: 'HuisnummersInNederland'},
				{displayName: 'Plaats',              value: 'PlaatsenInNederland'},
				{displayName: 'Postcode',            value: 'PostcodesInNederland'},
				{displayName: 'Straat',              value: 'StratenInNederland'},
				{displayName: 'Straat + huisnummer', value: 'AdressenInNederland'},
			]
		} ,    
  ],
	
  run (context , datatype  ) {
		
		switch (datatype) {
			case 'HuisnummersInNederland': return HuisnummersInNederland();
			case 'PlaatsenInNederland':    return PlaatsenInNederland();
			case 'PostcodesInNederland':   return PostcodesInNederland();
			case 'StratenInNederland':     return AdressenInNederland('straat');
			case 'AdressenInNederland':    return AdressenInNederland('');
			default:                       return 'Error - incorrect, or non-existing value selected ';
		}
    }

} ,

{
  name: 'IBAN',    
  displayName: 'Random IBAN',
  description: 'Creeer willekeurige IBAN nummers.',        
  args: [
  {
    displayName: 'IBAN',
    type: 'enum',
    options: [
      {displayName: 'Duitsland (DE)', value: 'IBANDE'},
      {displayName: 'Nederland (NL)', value: 'IBANNL'},
    ]
  } ,
 
],

run (context , datatype  ) {
  
    switch (datatype) {
      case 'IBANNL':  return IBAN('NL') ;
      case 'IBANDE':  return IBAN('DE') ;
      default:        return 'Error - incorrect, or non-existing value selected ';
    }
  }

},

{
  name: 'RandomNumbers',    
  displayName: 'Random numbers',
  description: 'Creer willekeurige getallen.',        
  args: [
  {
    displayName: 'Laagste',
    type: 'number',
	defaultValue: 1000000
  } ,
  {
    displayName: 'Hoogste	',
    type: 'number',
	defaultValue: 19999999
  } ,
  
],

run (context , min , max  ) {
 return Math.round(min + Math.random() * (max - min));
}

},

	
{
  name: 'RandomTestText',    
  displayName: 'Random text',
  description: 'Creeer willekeurige teksten.',        
  args: [
  {
    displayName: 'Soort',
    type: 'enum',
    options: [
      {displayName: 'ABC scramble', value: 'ABCScramble'},	
      {displayName: '123 scramble', value: '123Scramble'},	
      {displayName: 'ABC123 scramble', value: 'ABC123Scramble'},	
      {displayName: 'Lorum Ipsum', value: 'LorumIpsum'},	
      {displayName: 'Lorum corperate', value: 'CorperateLorumIpsum'},
    ]
  } ,
  {
    displayName: 'Lengte',
    type: 'enum',
    options: [
      {displayName: '10',  value: 10},	
      {displayName: '25',  value: 25},
      {displayName: '255', value: 255},
      {displayName: '1000', value: 1000},
    ]
  } ,
  
],

run (context , soort , lengte  ) {
  
  switch (soort) {
    case 'ABCScramble':          return Scramble('ABC',lengte);
    case '123Scramble':          return Scramble('123',lengte);
    case 'ABC123Scramble':       return Scramble('ABC123',lengte);
    case 'LorumIpsum':           return LorumIpsum(lengte);
    case 'CorperateLorumIpsum':  return CorperateLorumIpsum(lengte);
    default:                     return 'Error - incorrect, or non-existing value selected ';
  }

}

},

	
	
{
  name: 'RandomUnicode',    
  displayName: 'Random unicode items',
  description: 'Unicode random data.',        
  args: [
  {
    displayName: 'Unicode',
    type: 'enum',
    options: [
      {displayName: 'City', value: 'UnicodeCity'},								
    ]
  } ,
  
],

run (context , datatype  ) {
  
  switch (datatype) {
    case 'UnicodeCity':        return RandomChooseItem('UnicodeCity');
    default:                     return 'Error - incorrect, or non-existing value selected ';
  }
  }

}

];



function IBAN (CC){
var BC = [];

BC = [];

switch (CC) {
  case 'DE': {BC = ['64090100','30120400','37040044' ]; break; }
  case 'NL': {BC = ['ABNA', 'ABNA', 'ABNA', 'AEGO', 'ASNB' , 'BNPA' , 'INGB' , 'INGB' , 'INGB' , 'KABA', 'WEHY']; break; }
}

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


function RandomChooseItem(soort) {

    switch ( soort) {
      
      case 'UnicodeCity': {
        Items= ['København'
        , 'Göteborg','Umeå','Gävle', 'רושלים','תל אביב'  ,'אילת'
        , 'Curaçao' ,'上海','北京',' 深圳','成都','广州','天津','海参崴'
        ,'서울','부산','釜山','대구 광역시','北京' ,'京都市','大阪市','広島市','奈良市'
        , 'Москва','Санкт-Петербург','Екатеринбург','Владивосток','Нижний Новгород'
        , 'मुंबaī', 'mumbəi' ,'ಬೆಂಗಳೂರು','சென்னை', 'અમદાવાદ', 'الرباط','مراكش ','الدار البيضاء'
        ];
      }
      
    }
    
    return Items[Math.floor(Math.random() * Items.length )] ;
    
}


function Mobiel() {
  min = 10000000;
  max = 99999999;
  prefix = '06-';
  randomNumber = (Math.floor(Math.random() * (max - min)) + min);
  return (prefix + randomNumber ).toString();
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
            ,'Schinnen','Schouwen-Duiveland','Simpelveld','Sint Anthonis','Sint-Michielsgestel','Sittard-Geleen'
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

function CorperateLorumIpsum (maxlength)  {

  var LorumIpsum = '';
  
  const Adjective = ['agile','rich','existing','famous','fragile', 'fragile but promising','fragil but rich','great','great and thrustworthy','growing','powerful','powerful and rich','promising','reliable','responsible','strong','trustworty','weak','weak but promising'];           
  const Space = ' '; 
  const Comma = ', '; 
  const LinkingEmphasis  = ['always','especially','always','clearly','never','occasionally','surely','without a doubt','without any doubt','often','obviously'];           
  const LinkingAddition  = ['additionally','also','along with','besides','furthermore','together with','moreover'];           
  const NounsPlural = ['advisers','employees','companies','coorperations', 'customers','directors','dictators','frameworks','goverments','managers','project leaders','resources','robots','solutions','stakeholders','strategies','suppliers','technologies'];           
  NounsPlural.push ('3D printers','air defence systems','bots','pocket calculators','compilers','computers','desktops', 'factories','gadgets', 'high end solutions','integrated circuites','laptops','mobile phones','protocolls', 'printers','radios','robots','routers','televison stations','workstations', 'wifi connections');
  NounsPlural.push ('accumlators','cookies','data cariers','firewalls','random data generators','radio transmitters','transponders','web servers','websites');
  NounsPlural.push = ['agents','accountants','artificial intelligent robots','engineers','freaks','financial directors','geeks','hackers','nanobots','nerds','operators','sales managers','security officers','snipers','monkeys','terminators','zilots','zionists'];           
  const VerbsAuxiliary = ['can','could','might','must','shall','should','will'];
  const VerbsAction = ['assist','avoid','deny','betray','enclose','endure','ensure','empower','forget','help','introduce','improve','join', 'maximize','overtake','override','outsource','resist','translate','stimulate'];
  const VerbsActionPrefix = ['always','in most cases','never','not','somethimes'];
  const Gerund = ['assisting','avoiding','contributing','directing','enabling','engaging in','entering','ensuring','empowering','focusing on','forgetting','helping','improving','joining','outsourcing','podcasting','paying','praysing','resisting','thinking','trying'];
  const GerundPrefix = ['and','and','and','and thereby', 'allow','when','without','whilst'];
  const LinkingFirstWord = ['additionally','although','however,','therefor','moreover,','whereas','it is obvious that','one can only pray that']
  const LinkingSecondWord = ['above all','nevertheless','despite','finally','first and foremost', 'having said that','on the other hand','subsequently','conversely','last but not least','unless']
  LinkingSecondWord.push ('in such a case it should be obvious that', 'it should be noted that','in such a case it will be clear that' )
  LinkingSecondWord.push ('by now it should be obvious that','lets all just hope it is obvious that','the more observant among us wil have noticed that')
  const PunctuationMarks = []; 
  for ( i = 1; i < 10; i++ ){ PunctuationMarks.push (' '); }
  for ( i = 1; i < 10; i++ ){ PunctuationMarks.push (' and '); }
  for ( i = 1; i < 10; i++ ){ PunctuationMarks.push (' & '); }
  for ( i = 1; i < 10; i++ ){ PunctuationMarks.push (', '); }

  var thema = NounsPlural[Math.floor(Math.random() * NounsPlural.length )];	
  var Continue = true ;
  while ( Continue  ) {
      var Sentence = Adjective[Math.floor(Math.random() * Adjective.length )].capitalize() + 
                     Space +
                     thema   + 
                     Space +
                     VerbsAuxiliary[Math.floor(Math.random() * VerbsAuxiliary.length )]  +
                     Space +
                     LinkingEmphasis[Math.floor(Math.random() * LinkingEmphasis.length )]  +
                     Space +
                     VerbsAction[Math.floor(Math.random() * VerbsAction.length )] +
                     Space +
                     Adjective[Math.floor(Math.random() * Adjective.length )] +
                     Space +
                     NounsPlural[Math.floor(Math.random() * NounsPlural.length )] +
                     Space ;
		if ( Math.random() * 100 > 30 ) {
		   Sentence += GerundPrefix[Math.floor(Math.random() * GerundPrefix.length )] + Space;
		}
        
        Sentence +=  Gerund[Math.floor(Math.random() * VerbsAction.length )] +   
                     Space +       
                     Adjective[Math.floor(Math.random() * Adjective.length )] +   
                     Space +
                     thema +   
                     '. ';
      Continue = ((LorumIpsum.length + Sentence.length + 1 ) <= maxlength );
      if (Continue)  {
        Sentence += LinkingFirstWord[Math.floor(Math.random() * LinkingFirstWord.length )].capitalize() +
                    Space +
                    Adjective[Math.floor(Math.random() * Adjective.length )] +
                    Space +
                    thema  +
                    Space ;
		if ( Math.random() * 100 > 50 ) {
		   Sentence += VerbsActionPrefix[Math.floor(Math.random() * VerbsActionPrefix.length )] + Space;
		}
        Sentence += VerbsAuxiliary[Math.floor(Math.random() * VerbsAuxiliary.length )]  +
                    Space ;
        Continue = ((LorumIpsum.length + Sentence.length + 1 ) <= maxlength );
		if ( Math.random() * 100 > 50 && Continue) {
		   Sentence += VerbsActionPrefix[Math.floor(Math.random() * VerbsActionPrefix.length )] + Space;
		}
        Sentence += VerbsAction[Math.floor(Math.random() * VerbsAction.length )]  +
                    Space +
                    NounsPlural[Math.floor(Math.random() * NounsPlural.length )]  +
                   '. ';
      }
      Continue = ((LorumIpsum.length + Sentence.length + 1 ) <= maxlength );
      if (Continue)  {
        Sentence += LinkingSecondWord[Math.floor(Math.random() * LinkingFirstWord.length )].capitalize() +
                    Space +
                    Adjective[Math.floor(Math.random() * Adjective.length )] +
                    Space +
                    NounsPlural[Math.floor(Math.random() * NounsPlural.length )]  +
                    Space +
                    VerbsAuxiliary[Math.floor(Math.random() * VerbsAuxiliary.length )]  +
                    Space +
                    VerbsAction[Math.floor(Math.random() * VerbsAction.length )]  +
                    Space +
                    thema  +
                   '. ';
      }
      LorumIpsum += Sentence ;
  }

  return LorumIpsum;
}




function Scramble (type, maxlength)  {
  var Scramble = '';
  var Items = ''; 
  switch ( type) {    
    case 'ABC' : { Items = 'ABCDEFGHIJKLMNOPQRSTUVWXUZ' ; break;} 
    case '123' : { Items = '0123456789' ; break;} 
    case 'ABC123' : { Items = 'ABCDEFGHIJKLMNOPQRSTUVWXUZ0123456789' ; break;} 
  }           
  
  while ( Scramble.length  < maxlength  ) {
      Scramble += Items[Math.floor(Math.random() * Items.length )];
  }
  return Scramble;
}

function AdressenInNederland (Soort){
 var Names = ['Appelboom','Beukenboom','Berkenboom','Dennenboom','Iep','Eikenboom','Kastanjeboom','Kersenboom','Perenboom', 'Wilg','Cypres','Ceder',
              'Appelboom','Beukenboom','Berkenboom','Dennenboom','Iep','Eikenboom','Kastanjeboom','Kersenboom','Perenboom', 'Wilg','Cypres','Ceder',
              'Appelboom','Beukenboom','Berkenboom','Dennenboom','Iep','Eikenboom','Kastanjeboom','Kersenboom','Perenboom', 'Wilg','Cypres','Ceder',
              'Anjer', 'Margriet', 'Rozen','Sneeuwklokjes','Tulpen','Vergeetmeniet','Zonnenbloem',
              'Anjer', 'Margriet', 'Rozen','Sneeuwklokjes','Tulpen','Vergeetmeniet','Zonnenbloem',
              'Anjer', 'Margriet', 'Rozen','Sneeuwklokjes','Tulpen','Vergeetmeniet','Zonnenbloem',
              'Jupiter', 'Mercurius','Maan', 'Mars', 'Saturnus', 'Uranus', 'Venus' , 'Zon',
              'Jupiter', 'Mercurius','Maan', 'Mars', 'Saturnus', 'Uranus', 'Venus' , 'Zon',
              'Jupiter', 'Mercurius','Maan', 'Mars', 'Saturnus', 'Uranus', 'Venus' , 'Zon',
              'Einstein','Edison','Tesla','Newton','Celcius','Kelvin','Pasteur','Arieh Warshel ','Michael Levitt ','Daniel Shechtman ','Ada Yonath ',
              'Aaron Ciechanover ','Avram Hershko ','Yitzchak Rabin ','Shimon Peres ','Menachem Begin','Sjmoeël Joseef Agnon',
              'Gerard Aafjes','Carlos Aalbers','Gert Aandewiel','Patrick van Aanholt','Henny van der Aar','Kees Aarts','Christopher van der Aat',
              'Martijn Abbenhues','Martin Abbenhuis','Yassine Abdellaoui','David Abdul','Liban Abdulahi','Dirk Abels','Gert Abma','Johan Abma',
              'Anass Achahbar','Rochdi Achenteh','Eddy Achterberg','Giorgio Achterberg','John Achterberg','Elton Acolatse','Law Adam','Marcel Adam'
              ,'Michel Adam','Michiel Adams','Johan Adang','Cor Adelaar','Frans Adelaar','Erik van Adelberg','Co Adriaanse','Dick Advocaat','Romeo van Aerde'
              ,'Berry van Aerle','Jos van Aerts','Maikel Aerts','Ibrahim Afellay','Kemy Agustien','Achmed Ahahaoui','Alami Ahannach','Soufyan Ahannach','Bert Aipassa',
              'Ismaïl Aissati','Nathan Aké','Joost van Aken','Marcel Akerboom','Jan van de Akker','Sofian Akouili','Fahd Aktaou','Furkan Alakmak','Tony Alberda',
              'Suently Alberto','René Alberts','Quentin Albertus','Norbert Alblas','Roland Alberg','Suently Alberto','Rob Alflen','Shapoul Ali','Adnan Alisic','Mohammed Allach',
              'Quincy Allée','Frans Alma','Pier Alma','Anmar Almubaraki','Marco van Alphen','Jim van Alst','Jeffrey Altheer','Samir Amari','Pelle van Amersfoort','Mawouna Amevor',
              'Mustafa Amezrine','Carlo lAmi','Ahmed Ammi','Nordin Amrabat','Sofyan Amrabat','Zakaria Amrani','Wim Anderiesen','Djavan Anderson','Kenny Anderson','Aad Andriessen',
              'Ype Anema','Henk Angenent','Vurnon Anita','Pelé van Anholt','Edwin van Ankeren','Jarchinio Antonia','Geraldo António','Rodney Antwi','Soufiane Aouragh','Mitch Apau',
              'Bram Appel','Menno van Appelen','Henk den Arend','Berry Arends','Richard Arends','Yener Arıca','Ceylan Arikan','Willem van der Ark','Philippe van Arnhem','Peter Arntz',
              'Sjoerd Ars','Masies Artien','Alfons Arts','Arno Arts','Jan Artz','Wouter Artz','Hans van Arum','Jeffrey van As','Deniz Aslan','Elroy Asmus','Oussama Assaidi','Abdes Assouiki',
              'Kevin van Assouw','Maarten Atmodikoro','Raymond Atteveld','Adil Auassar','Pascal Averdijk','Berthil ter Avest','Hidde ter Avest','Patrick Ax','Yassin Ayoub','Yassine Azzagari',
              'Stefan Aartsen','Carolyn Adel','Jasper Aerents','Robin van Aggele','Triin Aljand','Franziska van Almsick','Jopie van Alphen','Therese Alshammar','Irina Amsjennikova','Greta Andersen'
              ,'Mayumi Aoki','Duncan Armstrong','Örn Arnarson','Eva Arndt','Isabelle Arnould','Pär Arvidsson','Alia Atkinson','Garnet Ault',
              'Sade Daal','Alexander Dale Oen','Gijs Damen','José Damen','Eszter Dara','Tamás Darnyi','Uwe Daßler','Frédérik Deburghgraeve','Joseph De Combe',
              'Brendon Dedekind','Gé Dekker','Inge Dekker','Lia Dekker','Ron Dekker','Dieter Dekoninck','Rick DeMont','Stijn Depypere','Gilles De Wilde','Stefan de Die',
              'Nelson Diebel','Ines Diers','Edith van Dijk','Tom Dolan','Duje Draganja','Dion Dreesens','Elt Drenth','Nick Driebergen','Frank Drost','Johannes Drost','Monique Drost',
              'Peter Drost','Fabienne Dufour','Jason Dunford','Matthew Dunn','Nate Dusing','Patrick Dybiona','Marjolein Delno','Caeleb Dressel'
              ];
 var Types = ['laan', 'plein', 'straat' , 'straat'];

 var Name = Names[Math.floor(Math.random() * Names.length )] ;
 var Type = Types[Math.floor(Math.random() * Types.length )] ;
 
 if (Soort == 'straat' ) {
  return Name + Type  ;
 } else {
  var Number = Math.round(Math.random() *  200,0);
  return Name + Type + ' ' + Number ;
 } 
}


 function HuisnummersInNederland (){
  
  var Number = Math.round(Math.random() *  200,0);
  return Number ;
  
 }
 

function PostcodesInNederland (){
 var Number = 1000 + Math.round(Math.random() *  8000,0);
 var Txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
 return Number + ' ' + Txt.substr(Math.random() * 26,1)  + Txt.substr(Math.random() *26, 1) ;
}


function firstName(){
  var FN = ['Mark','Charles','Wiliam','George','Jack','James','H.C.','Isaac','Edgar Ellan' ,'Fjoder','Lev','Aleksander','Heinrich','Franz','Aleksandr','Remco','Anton','Umberto','Leon','Ray',
            'Sade','Alexander','Gijs','José','Eszter','Tamás','Uwe','Frédérik','Joseph',
            'Brendon','Gé','Inge','Lia','Ron','Dieter','Rick','Stijn','Gilles','Stefan',
            'Nelson','Ines','Edith','Tom','Duje','Dion','Elt','Nick','Frank','Johannes','Monique',
            'Peter','Fabienne','Jason','Matthew','Nate','Patrick','Marjolein','Caeleb'
           ];
  return  FN[Math.floor( FN.length * Math.random ())] ;
}

function surName(){
  var LN = ['Twain','Dickens','Shakespear','Orwell','Vance','Baldwin','Wells','Asimov','Poe','Tolstoj','Poeskin','Böll','Kafka','Solzhenitsyn','Campert','Tjechov','Eco','de Winter','Kurzweil',
            'Daal','Dale Oen','Damen','Damen','Dara','Darnyi','Daßler','Deburghgraeve','de Combe',
            'Dedekind','Dekker','Dekoninck','DeMont','Depypere','De Wilde','Die',
            'Diebel','Diers','van Dijk','Dolan','Draganja','Dreesens','Drenth','Driebergen','Drost','Drost',
            'Dufour','Dunford','Dunn','Dusing','Dybiona','Delno','Dressel' 
          ];
  return  LN[Math.floor( LN.length * Math.random ())] ;
}

function Name(){
  return  firstName() + ' ' + surName()  ;
}




