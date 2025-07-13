const LengthUnits = ["millimeter", "centimeter", "meter", "kilometer", "inch", "foot","mile"];
const TemperatureUnits = ["celsius", "fahrenheit", "kelvin", "rankine", "reaumur", "delisle", "newton"];
const AreaUnits   = ["square millimeter", "square centimeter", "square meter", "square kilometer", "hectare", "acre", "square mile"];
const VolumeUnits = ["milliliter", "liter", "cubic centimeter", "cubic meter", "gallon", "cubic foot", "cubic inch"];
const WeightUnits = ["milligram", "gram", "kilogram", "metric ton", "ounce", "pound", "stone"];
const TimeUnits   = ["second", "minute", "hour", "day", "week", "month", "year"];
const ids1 = ['unit1', 'unit2', 'unit3', 'unit4', 'unit5', 'unit6', 'unit7'];
const ids2 = ['unitA', 'unitB', 'unitC', 'unitD', 'unitE', 'unitF', 'unitG'];

//function to render the units of measure to the page
function renderUnits(array) {
    const ulElFrom = document.getElementById('ulFrom-el');
    const ulElTo = document.getElementById('ulTo-el');
    let field1 = ''
    let field2 = ''
    for (let i=0; i<array.length; i++) {
        field1 += `<li><p id='${ids1[i]}'>${(array[i]).toUpperCase()}</p></li>` // each unit of measure is listed, given a tag and assigned an ID 
        field2 += `<li><p id='${ids2[i]}'>${(array[i]).toUpperCase()}</p></li>`
        localStorage.setItem('units', JSON.stringify(array))
    };
    ulElFrom.innerHTML = field1
    ulElTo.innerHTML = field2
}; //function ends here


// all units collected by DOM after they've been given IDs
const unit1El = document.getElementById('unit1');
const unit2El = document.getElementById('unit2');
const unit3El = document.getElementById('unit3');
const unit4El = document.getElementById('unit4');
const unit5El = document.getElementById('unit5');
const unit6El = document.getElementById('unit6');
const unit7El = document.getElementById('unit7');


//function for when unit1/A is clicked.
function unit1Clicked() {
    const unit1El = document.getElementById('unit1');
    const unitAEl = document.getElementById('unitA');
    const fromFieldEl = document.getElementById('fromField');
    const toFieldEl = document.getElementById('toField');

    if (unit1El === MILLIMETER && unitAEl === MILLIMETER) {
        let convert = 
        convert += fromFieldEl.value * 10
    };
    toFieldEl.value = convert
}; // function ends here


//if user selects length button, contents are displayed
const lengthEl = document.getElementById('Length-el')
lengthEl.addEventListener('click', function() {
    renderUnits(LengthUnits) // contents displayed

    const dataFromLocalStorage = JSON.parse(localStorage.getItem('units'));
   
    // user clicks on unit1
    const unit1El = document.getElementById('unit1');
    const unitAEl = document.getElementById('unitA');
    unit1El.addEventListener('click', function() {
        localStorage.setItem('unit1Cl', 'MILLIMETER' )
        unitAEl.addEventListener('click', function() {
            localStorage.getItem('unit1Cl')
            unit1Clicked()
        });
    });

});




//if user selects temperature button, contents are displayed
const tempEl = document.getElementById('temp-el')
tempEl.addEventListener('click', function() {
    renderUnits(TemperatureUnits)
});

//if user selects area button, contents are displayed
const areaEl = document.getElementById('area-el')
areaEl.addEventListener('click', function() {
    renderUnits(AreaUnits)
});

//if user selects volume button, contents are displayed
const volumeEl = document.getElementById('volume-el')
volumeEl.addEventListener('click', function() {
    renderUnits(VolumeUnits)
});

//if user selects weight button, contents are displayed
const weightEl = document.getElementById('weight-el')
weightEl.addEventListener('click', function() {
    renderUnits(WeightUnits)
});

//if user selects weight button, contents are displayed
const timeEl = document.getElementById('time-el')
timeEl.addEventListener('click', function() {
    renderUnits(TimeUnits)
});