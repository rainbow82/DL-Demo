'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en": {
        "translation": {
            "SKILL_NAME" : "Down Load",
            //  "GET_COMPLIMENT_MESSAGE" : "Here's your compliment: ",
            "GET_RESPONSE" : "The top things on download are: ",
            "HELP_MESSAGE" : "You can ask What's new, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },

    //update responses here
    "en-US": {
        "translation": {
            // "COMPLIMENTS": [
            //     "You are awesome.",
            //     "You shine like a star",
            //     "You rock!",
            //     "Mirror Mirror on the wall, you are the fairest of them all.",
            //     "You make my day better.",
            //     "You are so fetch.",
            //     "The world would be darker without you.",
            //     "You look great today.",
            //     "You are the most perfect you there is.",
            //     "You're stronger than you know.",
            //     "You deserve a hug right now",
            //     "Is that your picture next to charming in the dictionary?",
            //     "On a scale from 1 to 10, you're an 11.",
            //     "You're all that and a bag of chips.",
            //     "If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.",
            //     "Disney princesses can't compare to next to you.",
            //     "How is it that you always look great, even in yoga pants?",
            //     "You were cool way before hipsters were cool.",
            //     "I bet you sweat glitter.",
            //     "When you're not afraid to be yourself is when you're most incredible.",
            //     "You have cute elbows. For reals! ",
            //     "You're better than a triple-scoop ice cream cone. With sprinkles.",
            //     "If you were a box of crayons, you'd be the giant name-brand one with the built-in sharpener.",
            //     "You could survive a Zombie apocalypse.",
            //     "If you were a scented candle they'd call it Perfectly Imperfect (and it would smell like summer)."

            // ],
            "SKILL_NAME" : "Down Load"
        }
    },
  
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetWhatsNew');
    },
    'GetWhatsNewIntent': function () {
        this.emit('GetwhatsNew');
    },
    'GetWhatsNew': function () {
        // Get the top 3 newest things on Download
        // Use this.t() to get corresponding language data
        // var ComplimentArr = this.t('COMPLIMENTS');
        // var ComplimentIndex = Math.floor(Math.random() * ComplimentArr.length);
        // var randomCompliment = ComplimentArr[ComplimentIndex];

        // Create speech output
        // var speechOutput = this.t("GET_COMPLIMENT_MESSAGE") + randomCompliment;
        var speechOutput = this.t("GET_RESPONSE") + "Dropler Lite, Busy Contacts, and Code Kit.";
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"))
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'UnhandledIntent': function(){
        this.emit(':ask', "I did not understand. Please try again");
    }
};