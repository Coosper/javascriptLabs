const maggie = {
	firstName: 'Maggie',
	lastName: 'Simpson',
	age: 2,
};

const lisa = {
	firstName: 'Lisa',
	lastName: 'Simpson',
	age: 12,
	favouriteInstrument: 'Saxophone',
};

const gary = {
  firstName: 'Gary',
  lastName: 'Chalmers',
  age: 49,
  hello() {
    console.log('"Well, Seymour I made it... despite your directions" said Superintendent' + this.lastName);
  },
  goodbye() {
	  console.log('"Aurora Borealis? At this time of year? At this time of day? In this part of the country? Localized entirely... within your kitchen?" Superintendent ' + this.lastName + ' asked again before leaving...');
}
}


gary.hello();
gary.goodbye();
