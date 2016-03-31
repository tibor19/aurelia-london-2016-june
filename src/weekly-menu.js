import {inlineView} from 'aurelia-framework';

@inlineView(`
<template>
    \${message}
</template>
`)
export class WeeklyMenu{
    message = 'Nothing to eat for you this week!';
}