import { GetServerSideProps } from 'next';


    export type Сountry = {
		flag_url: string;
		name_ru: string;
		iso_code2: string
		iso_code3: string;
		isRemoving?: boolean;
	  };

	const countries: Сountry[] = [
      
      {
        flag_url:
          '//upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/22px-Flag_of_Austria.svg.png',
        name_ru: 'Австрия',
        iso_code2: 'AT',
        iso_code3: 'AUT',
      },{
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/22px-Flag_of_Azerbaijan.svg.png",
		"name_ru" : "Азербайджан",
		"iso_code2" : "AZ",
		"iso_code3" : "AZE"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/22px-Flag_of_%C3%85land.svg.png",
		"name_ru" : "Аландские острова",
		"iso_code2" : "AX",
		"iso_code3" : "ALA"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/22px-Flag_of_Albania.svg.png",
		"name_ru" : "Албания",
		"iso_code2" : "AL",
		"iso_code3" : "ALB"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/22px-Flag_of_Algeria.svg.png",
		"name_ru" : "Алжир",
		"iso_code2" : "DZ",
		"iso_code3" : "DZA"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/22px-Flag_of_the_United_States_Virgin_Islands.svg.png",
		"name_ru" : "Виргинские Острова (США)",
		"iso_code2" : "VI",
		"iso_code3" : "VIR"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_American_Samoa.svg/22px-Flag_of_American_Samoa.svg.png",
		"name_ru" : "Американское Самоа",
		"iso_code2" : "AS",
		"iso_code3" : "ASM"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Anguilla.svg/22px-Flag_of_Anguilla.svg.png",
		"name_ru" : "Ангилья",
		"iso_code2" : "AI",
		"iso_code3" : "AIA"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/22px-Flag_of_Angola.svg.png",
		"name_ru" : "Ангола",
		"iso_code2" : "AO",
		"iso_code3" : "AGO"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/22px-Flag_of_Andorra.svg.png",
		"name_ru" : "Андорра",
		"iso_code2" : "AD",
		"iso_code3" : "AND"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Antarctica.svg/22px-Flag_of_Antarctica.svg.png",
		"name_ru" : "Антарктида",
		"iso_code2" : "AQ",
		"iso_code3" : "ATA"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/22px-Flag_of_Antigua_and_Barbuda.svg.png",
		"name_ru" : "Антигуа и Барбуда",
		"iso_code2" : "AG",
		"iso_code3" : "ATG"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/22px-Flag_of_Argentina.svg.png",
		"name_ru" : "Аргентина",
		"iso_code2" : "AR",
		"iso_code3" : "ARG"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/22px-Flag_of_Armenia.svg.png",
		"name_ru" : "Армения",
		"iso_code2" : "AM",
		"iso_code3" : "ARM"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Aruba.svg/22px-Flag_of_Aruba.svg.png",
		"name_ru" : "Аруба",
		"iso_code2" : "AW",
		"iso_code3" : "ABW"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/1/16/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg_%28alternative_version_2%29.svg/24px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg_%28alternative_version_2%29.svg.png",
		"name_ru" : "Афганистан",
		"iso_code2" : "AF",
		"iso_code3" : "AFG"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/22px-Flag_of_the_Bahamas.svg.png",
		"name_ru" : "Багамы",
		"iso_code2" : "BS",
		"iso_code3" : "BHS"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/22px-Flag_of_Bangladesh.svg.png",
		"name_ru" : "Бангладеш",
		"iso_code2" : "BD",
		"iso_code3" : "BGD"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/22px-Flag_of_Barbados.svg.png",
		"name_ru" : "Барбадос",
		"iso_code2" : "BB",
		"iso_code3" : "BRB"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/22px-Flag_of_Bahrain.svg.png",
		"name_ru" : "Бахрейн",
		"iso_code2" : "BH",
		"iso_code3" : "BHR"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/22px-Flag_of_Belize.svg.png",
		"name_ru" : "Белиз",
		"iso_code2" : "BZ",
		"iso_code3" : "BLZ"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/22px-Flag_of_Belarus.svg.png",
		"name_ru" : "Белоруссия",
		"iso_code2" : "BY",
		"iso_code3" : "BLR"
	}, {
		"flag_url" : "//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/22px-Flag_of_Belgium_%28civil%29.svg.png",
		"name_ru" : "Бельгия",
		"iso_code2" : "BE",
		"iso_code3" : "BEL"
	}, 
      
    ];
	export const getServerSideProps = async () => {
		return {
		  props: {
			countries,
		  },
		};
	  };
	  
  