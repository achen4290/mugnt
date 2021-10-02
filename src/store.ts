import { atom } from 'recoil';

const SIDEBAROPEN = atom({
    key: "SIDEBAROPEN",
    default: false
});

const MUGGEDPERCENT = atom({
    key: "MUGGEDPERCENT",
    default: 50
});

const HOMICIDEPERCENT = atom({
    key: "HOMICIDEPERCENT",
    default: 50
});

const SEXUALASSAULTPERCENT = atom({
    key: "SEXUALASSAULTPERCENT",
    default: 50
});

const SEXOFFENSESPERCENT = atom({
    key: "SEXOFFENSESPERCENT",
    default: 50
});

const ASSAULTPERCENT = atom({
    key: "ASSAULTPERCENT",
    default: 50
});

const AGGRAVATEDASSAULTPERCENT = atom({
    key: "AGGRAVATEDASSAULTPERCENT",
    default: 50
});

const ROBBERYPERCENT = atom({
    key: "ROBBERYPERCENT",
    default: 50
});

const CITY = atom({
    key: "CITY",
    default: "pittsburgh"
})

export { SIDEBAROPEN, MUGGEDPERCENT, HOMICIDEPERCENT, SEXUALASSAULTPERCENT, SEXOFFENSESPERCENT, ASSAULTPERCENT, AGGRAVATEDASSAULTPERCENT, ROBBERYPERCENT, CITY };