module.exports.templateTags = [
{
	name: 'Addresses',    
    displayName: 'Random addresses ',
    description: 'It wil create random addresses.',        
	  args: [
		{
			displayName: 'Select your Country',
			type: 'enum',
			options: [
				{displayName: 'BE',                  value: 'BE'},
				{displayName: 'DE',                  value: 'DE'},
				{displayName: 'NL',                  value: 'NL'},
			]
		} ,    
		{
			displayName: 'Select your adddress type',
			type: 'enum',
			options: [
				{displayName: 'Housenumber',          value: 'Housenumber'},
				{displayName: 'Place',                value: 'Place'},
				{displayName: 'Postalcode',           value: 'Postalcode'},
				{displayName: 'Street',               value: 'Street'},
				{displayName: 'Street + housenumber', value: 'StreetHousenumber'},
			]
		} ,    
  ],
	
  run (context , country , addresstype   ) {
		
		switch (addresstype) {
			case 'Housenumber':            return Housenumber(country);
			case 'Place':                  return Place(country);
			case 'Postalcode':             return Postalcode(country);
			case 'Street':                 return Address(country, 'street');
			case 'StreetHousenumber':      return Address(country, '');
			default:                       return 'Error - incorrect, or non-existing value selected ';
		}
    }

} ,

{
  name: 'Naam',    
  displayName: 'Namen',
  description: 'Creer willekeurige namen.',        
  args: [
  {
    displayName: 'Namen',
    type: 'enum',
    options: [
      {displayName: 'Voornamen',            value: 'Voornamen'},
      {displayName: 'Achternamen',          value: 'Achternamen'},
      {displayName: 'Voor- en achternamen', value: 'Namen'}
    ]
  } ,    
],

run (context , datatype  ) {
  
  switch (datatype) {
    case 'Voornamen':      return firstName();
    case 'Achternamen':    return surName();
    case 'Namen':          return Name();
    default:               return 'Error - incorrect, or non-existing value selected ';
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
  name: 'Waardes',    
  displayName: 'Random Waardes uit je lijst',
  description: 'Selecteert 1 waarde uit een zelfbepaalde.',        
  args: [
  {
    displayName: 'Voer komma-gescheiden waardes in.',
    type: 'string',
	defaultValue: "A,B,C,D,1,2,3"
  } 
  
],

run (context , lijst   ) {
 return SelecteerItems(lijst);
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
      {displayName: 'ABC',                      value: 'ABC'},	
      {displayName: '123',                      value: '123'},	
      {displayName: 'ABC123',                   value: 'ABC123'},	
      {displayName: 'Lorum Ipsum',              value: 'LorumIpsum'},	
      {displayName: 'Lorum corperate',          value: 'CorperateLorumIpsum'},
      {displayName: 'Unicode Greek and Coptic', value: 'Unicode Greek and Coptic'},	
      {displayName: 'Unicode Chinese',          value: 'Unicode Chinese'},	
      {displayName: 'Unicode LatinExtended-B',  value: 'Unicode LatinExtended-B'},	
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
    case 'ABC':                       return Scramble('ABC',lengte);
    case '123':                       return Scramble('123',lengte);
    case 'ABC123':                    return Scramble('ABC123',lengte);
    case 'LorumIpsum':                return LorumIpsum(lengte);
    case 'CorperateLorumIpsum':       return CorperateLorumIpsum(lengte);
    case 'Unicode Greek and Coptic':  return ScrambleUniCode('GreekCoptic',lengte);
    case 'Unicode Chinese':           return ScrambleUniCode('HAN',lengte);
    case 'Unicode LatinExtended-B':   return ScrambleUniCode('LatinExtended-B',lengte);
    default:                          return 'Error - incorrect, or non-existing value selected ';
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
        ,'Кривий Ріг', 'Göteborg','Umeå','Gävle'
		, 'רושלים','תל אביב'  ,'אילת'
        , 'Curaçao' ,'上海','北京',' 深圳','成都','广州','天津','海参崴'
        ,'서울','부산','釜山','대구 광역시','北京' ,'京都市','大阪市','広島市','奈良市'
        , 'Москва','Санкт-Петербург','Екатеринбург','Владивосток','Нижний Новгород'
        , 'मुंबaī', 'mumbəi' ,'ಬೆಂಗಳೂರು','சென்னை', 'અમદાવાદ', 'الرباط','مراكش ','الدار البيضاء'
		, 'Київ', 'Харків','Одеса','	Дніпро','Донецьк','Запоріжжя','Львів','Кривий Ріг','Миколаїв','Чернігів'
	    , '	안동시' ,'安東市','안산시','安山市','서울특별시'
		, 'Ақтау','Ақтөбе','Алматы','Арқалық','Атырау'
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

function Place (country) {
	switch ( country) {
	  case 'NL': {
        Places = [ 'Aa en Hunze','Aalburg','Aalsmeer','Aalten','Achtkarspelen','Alblasserdam'      
				,'Ameland','Amersfoort','Amstelveen','Amsterdam','Apeldoorn','Appingedam','Arnhem'
				,'Beemster','Beesel','Berg en Dal','Bergeijk','Bergen (L.)','Bergen (NH.)','Bergen op Zoom'
				,'Binnenmaas','Bladel','Blaricum','Bloemendaal','Bodegraven-Reeuwijk','Boekel'
				,'Breda','Brielle','Bronckhorst','Brummen','Brunssum','Bunnik'
				,'Cromstrijen','Cuijk','Culemborg','Dalfsen','Dantumadiel','Delft'
				,'Doetinchem','Dongen','Dongeradeel','Dordrecht','Drechterland','Drimmelen'
				,'Eemnes','Eemsmond','Eersel','Eijsden-Margraten','Eindhoven','Elburg'
				,'Ferwerderadiel','De Fryske Marren','Geertruidenberg','Geldermalsen','Geldrop-Mierlo','Gemert-Bakel'
				,'Gooise Meren','Gorinchem','Gouda','Grave','s-Gravenhage','Groningen'
				,'Haarlemmermeer','Halderberge','Hardenberg','Harderwijk','Hardinxveld-Giessendam','Haren'
				,'Heerhugowaard','Heerlen','Heeze-Leende','Heiloo','Den Helder','Hellendoorn'
				,'Heusden','Hillegom','Hilvarenbeek','Hilversum','Hof van Twente','Hollands Kroon'
				,'IJsselstein','Kaag en Braassem','Kampen','Kapelle','Katwijk','Kerkrade'
				,'Landerd','Landgraaf','Landsmeer','Langedijk','Lansingerland','Laren'
				,'Lelystad','Leudal','Leusden','Lingewaal','Lingewaard','Lisse'
				,'Maasgouw','Maassluis','Maastricht','De Marne','Marum','Medemblik'
				,'Midden-Groningen','Mill en Sint Hubert','Moerdijk','Molenwaard','Montferland','Montfoort'
				,'Nijkerk','Nijmegen','Nissewaard','Noord-Beveland','Noordenveld','Noordoostpolder'
				,'Oegstgeest','Oirschot','Oisterwijk','Oldambt','Oldebroek','Oldenzaal'
				,'Oostzaan','Opmeer','Opsterland','Oss','Oud-Beijerland','Oude IJsselstreek'
				,'Pijnacker-Nootdorp','Purmerend','Putten','Raalte','Reimerswaal','Renkum'
				,'Rijswijk','Roerdalen','Roermond','De Ronde Venen','Roosendaal','Rotterdam'
				,'Schinnen','Schouwen-Duiveland','Simpelveld','Sint Anthonis','Sint-Michielsgestel','Sittard-Geleen'
				,'Sliedrecht','Sluis','Smallingerland','Soest','Someren','Son en Breugel'
				,'Stichtse Vecht','Strijen','Súdwest-Fryslân','Terneuzen','Terschelling','Texel'
				,'Teylingen','Tholen','Tiel','Tilburg','Tubbergen','Twenterand'
				,'Utrecht','Utrechtse Heuvelrug','Vaals','Valkenburg aan de Geul','Valkenswaard','Veendam'
				,'Veenendaal','Veere','Veldhoven','Velsen','Venlo','Venray'
				,'Voorst','Vught','Waadhoeke','Waalre','Waalwijk','Waddinxveen'
				,'Wageningen','Wassenaar','Waterland','Weert','Weesp','Werkendam'
				,'Westvoorne','Wierden','Wijchen','Wijdemeren','Wijk bij Duurstede','Winsum'
				,'Woudrichem','Zaanstad','Zaltbommel','Zandvoort','Zederik','Zeewolde'
				,'Zeist','Zevenaar','Zoetermeer','Zoeterwoude','Zuidhorn','Zuidplas'
				,'Zundert','Zutphen','Zwartewaterland','Zwijndrecht','Zwolle'    ];

		  for ( i = 1; i < 200; i++ ){ Places.push ('Amsterdam','Amsterdam','Arnhem','Breda','Den Haag','Rotterdam','Rotterdam','Tilburg','Nijmegen','Utrecht'); } 	
		  for ( i = 1; i < 25; i++ ){ Places.push ('Assen','Den Bosch','Groningen','Leeuwarden','Leiden','Maastricht','Zutphen','Zwolle'); } 	
		  break; 		  
	  }
	  case 'BE': {
        Places = [ 'Antwerpen','Brugge', 'Brussel','Dinant','Gent','Hasselt','Kortrijk','Leuven','Luik','Mechelen','Namen','Oostende'    ];
		  break; 		  
	  }
	  case 'DE': {
        Places = [ 'Berlin','Bremen','Düsseldorf','Dresden','Hamburg','Keulen','Koblenz','Leipzich','München','Neurenberg','Potzdam','Trier'    ];
		  break; 		  
	  }
	  default: {
	    return 'Country (' + country + ') not yet supported.';		
		break;
	  }	  
		  
  }	  
  
  return Places[Math.floor(Math.random() * Places.length )] ;

}



function LorumIpsum (maxlength)  {
      Words = ['mauris','iaculis','felis','purus', 'et','varius','lectus','tempus','sed','non','semper','mi','ac','porta','augue','ondimentum','purus','ut','urna', 
               'pulvinar','magna','euismod','posuere','ante','in','quam','laoreet','placerat','labitur',  'feugiat',  'civibus', 'platonem', 'consequuntur',  'vix',  'ei',  
               'mauris' ,'dapibus', 'pulvinar','porta', 'aliquam', 'hendrerit', 'mauris','viverra', 'tincidunt', 'interdum', 'dui', 'libero' ,'luctus' , 'dui'
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
  NounsPlural.push ('vending machines','coffee machines','oil drillers','pencil sharpers','type writers','tug-boat','thoot picks','hearing aids');
  NounsPlural.push = ['agents','accountants','artificial intelligent robots','consultants','engineers','freaks','financial directors','geeks','hackers','telemarketeers','nanobots','nerds','operators','sales managers','security officers','snipers','monkeys','terminators','zilots','zionists'];           
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
      var Sentence = capatalize(Adjective[Math.floor(Math.random() * Adjective.length )]) + 
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
        Sentence += capatalize(LinkingFirstWord[Math.floor(Math.random() * LinkingFirstWord.length )]) +
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
        Sentence += capatalize(LinkingSecondWord[Math.floor(Math.random() * LinkingFirstWord.length )]) +
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


function capatalize(str){
  const lower = str.toLowerCase() 
  return  str.charAt(0).toUpperCase() 
      + lower.slice(1) 
}

function SelecteerItems (lijst) {
   Items = lijst.split(',');
   return Items[Math.floor(Math.random() * Items.length )] ;  
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

function ScrambleUniCode (type,maxlength) {
	var start,eind = 0;
	switch (type) {
		case 'HAN': { start = 19968 ;  eind =  20902; break; }
		case 'GreekCoptic': { start = 880 ;  eind =  1023 - start; break; }
		case 'LatinExtended-B': { start = 384 ;  eind =  591 - start; break; }
    }	
    var UC = '';
	for ( i = 0;  i < maxlength ; i++ ) {
       /* UC += String.fromCodePoint( start + Math.floor(Math.random() *  eind )) ; */
		UC += String.fromCodePoint( start + ( Math.floor( Math.random() *  eind )))  ;
	}
	return UC ;
}



function Address (country, Soort){
 switch (country) {	
	 case 'NL': {
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

		if (Soort == 'street' ) {
  		   return Name + Type  ;
	    } else {
  		   var Number = Math.round(Math.random() *  200,0);
		   return Name + Type + ' ' + Number ;
	   }
	   break;  
	}	 
	default: {
		return 'Country (' + country + ') not yet supported.';
		break;
	} 	 
  }
}


 function Housenumber (country){
  
  var Number = Math.round(Math.random() *  200,0);
  return Number ;
  
 }
 

function Postalcode (country){
 switch ( country) { 	
	 case 'NL': {
		 var Number = 1000 + Math.round(Math.random() *  8000,0);
         var Txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;	  	 
         return Number + ' ' + Txt.substr(Math.random() * 26,1)  + Txt.substr(Math.random() *26, 1) ;
		 break;
     }
	default: {
	    return 'Country (' + country + ') not yet supported.';		
		break;
	}
 }
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




