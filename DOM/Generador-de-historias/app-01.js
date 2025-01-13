// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customName');
const randomize = document.getElementById('randomize');
const story = document.getElementById('story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// 2. RAW TEXT STRINGS
const storyText = 'It was a hot day, and :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — 94 fahrenheit is hot, and 300 pounds is heavy.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem)
                       .replace(':insertx:', xItem)
                       .replace(':inserty:', yItem)
                       .replace(':insertz:', zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById('uk').checked) {
        const weight = `${Math.round(300 * 0.0714286)} stone`;
        const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;

        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('94 fahrenheit', temperature);
    }

    story.textContent = newStory;
}
