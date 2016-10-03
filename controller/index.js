'use strict';

const fs = require('fs');

function getIcons() {
    return function (done) {
        fs.readdir('static/sass/svgs', done);
    };
}

module.exports = {
    index: function *() {
        this.state.title = 'REBASE';
        yield this.render('index', {
            csrf: this.csrf,
        });
    },

    type: function *() {
        this.state.title = 'Type-REBASE';
        yield this.render('type', {
            csrf: this.csrf,
        });
    },

    svgs: function *() {
        this.state.title = 'REBASE';

        let svgs = yield getIcons();
        svgs = svgs.filter((svg) => {
            if (!/^\w+(?:-\w+)*\.(?:svg)$/i.test(svg)) {
                console.log('错误图片：', svg);
                return false;
            }
            return true;
        });

        yield this.render('svgs', {
            csrf: this.csrf,
            svgs: svgs,
        });
    },

    icons: function *() {
        this.state.title = 'REBASE';

        let icons = yield getIcons();
        icons = icons.filter((icon) => {
            if (!/^\w+(?:-\w+)*\.(?:svg)$/i.test(icon)) {
                return false;
            }
            return true;
        }).map((icon) => {
            return icon.split('.')[0];
        });

        yield this.render('icons', {
            csrf: this.csrf,
            icons: icons,
        });
    },

    badges: function *() {
        this.state.title = 'Badges-REBASE';

        yield this.render('badges', {
            csrf: this.csrf,
        });
    },

    buttons: function *() {
        this.state.title = 'Buttons-REBASE';

        yield this.render('buttons', {
            csrf: this.csrf,
        });
    },

    forms: function *() {
        this.state.title = 'Forms-REBASE';

        yield this.render('forms', {
            csrf: this.csrf,
        });
    },

    modals: function *() {
        this.state.title = 'Modals-REBASE';

        yield this.render('modals', {
            csrf: this.csrf,
        });
    },

    sliders: function *() {
        this.state.title = 'Sliders-REBASE';

        yield this.render('sliders', {
            csrf: this.csrf,
        });
    },
};
