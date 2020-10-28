import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#264653',
                secondary: '#2a9d8f',
                accent: '#e9c46a',
                error: '#f4a261',
                info: '#f4a261',
                success: '#00b4d8',
                warning: '#e76f51',
            },
            dark: {
                primary: '#01161e',
                secondary: '#124559',
                accent: '#598392',
                error: '#aec3b0',
                info: '#eff6e0',
                success: '#c89f9c',
                warning: '#aec3b0',
            }
        },
    }
});
