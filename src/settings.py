from flask_assets import Bundle

bundles = {
    'global_js': Bundle(
        'js/jquery-3.6.0.min.js',
        'js/materialize-1.1.0.min.js',
        output='js/gen/global.js',
        filters='jsmin'
    ),
    'global_css': Bundle(
        'css/material-icons-swap.css',
        'css/materialize-1.1.0.min.css',
        output='css/gen/global.css',
        filters='cssmin'
    ),
    'index_js': Bundle(
        'js/jquery-ui-1.13.2.bounce-only.js',
        'js/ScrollMagic-2.0.7.min.js',
        'js/leaflet-1.8.0.js',
        'js/Control.FullScreen.js',
        'js/L.Control.ResetView.min.js',
        output='js/gen/index.js',
        filters='jsmin'
    ),
    'index_css': Bundle(
        'css/leaflet-1.8.0.css',
        'css/Control.FullScreen.css',
        'css/L.Control.ResetView.min.css',
        output='css/gen/index.css',
        filters='cssmin'
    )
}

intro = [
    "Oprava a predaj elektroniky.",
    "Inštalácia softvéru a údržba počítačov.",
    "Programovanie pamätí a mikroprocesorov."
]

actions = {
    "Oprava spotrebnej elektroniky všetkých značiek": {
        "image": "repair.webp",
        "image_fallback": "repair.jpg",
        "icon": "radio",
        "short_name": "Oprava elektroniky",
        "anchor": "oprava-spotrebnej-elektroniky",
        "items": [
            "oprava televízorov",
            "oprava satelitných prijímačov",
            "oprava monitorov",
            "oprava DVD prehrávačov a video zariadení",
            "oprava audio zariadení"
        ]
    },
    "Oprava notebookov": {
        "image": "laptop.webp",
        "image_fallback": "laptop.jpg",
        "icon": "laptop_windows",
        "short_name": "Oprava notebookov",
        "anchor": "oprava-notebookov",
        "items": [
            "výmena displejov a invertorov",
            "výmena klávesníc",
            "výmena napájacích konektorov",
            "oprava základných dosiek",
            "obnova poškodeného BIOS-u po neúspešnej aktualizácii",
            "oprava grafických kariet",
            "reflow (pretavenie) BGA obvodov",
            "reballing (preguličkovanie) a znovu osadenie BGA obvodov",
            "výmena alebo rozšírenie RAM",
            "výmena HDD a SSD",
            "diagnostika",
            "zálohovanie a obnovenie dát"
        ]
    },
    "Oprava počítačov": {
        "image": "pc.webp",
        "image_fallback": "pc.jpg",
        "icon": "desktop_windows",
        "short_name": "Oprava počítačov",
        "anchor": "oprava-pocitacov",
        "items": [
            "oprava základných dosiek",
            "oprava a výmena zdrojov",
            "výmena a rozšírenie komponentov",
            "obnova poškodeného BIOS-u po neúspešnej aktualizácii"
        ]
    },
    "Inštalácia softvéru": {
        "image": "sw.webp",
        "image_fallback": "sw.jpg",
        "icon": "terminal",
        "short_name": "Inštalácia softvéru",
        "anchor": "instalacia-softveru",
        "items": [
            "reinštalácia systému Windows",
            "inštalácia ovládačov",
            "inštalácia antivírusového programu ESET",
            "odvírenie systému",
            "záloha a obnova dát",
            "prenesenie systému a súborov na nový HDD alebo SSD",
            "diagnostika a údržba počítačov a notebookov"
        ]
    },
    "Programovanie obvodov": {
        "image": "chip.webp",
        "image_fallback": "chip.jpg",
        "icon": "developer_board",
        "short_name": "Programovanie obvodov",
        "anchor": "programovanie-obvodov",
        "items": [
            "programovanie pamätí EPROM, EEPROM, Flash EPROM a sériových E(E)PROM rôznych typov",
            "programovanie mikroprocesorov Atmel, PIC atď...",
            "ponúkame aj možnosť odpájania a pripájania SMD obvodov"
        ]
    },
    "Predaj": {
        "image": "build.webp",
        "image_fallback": "build.jpg",
        "icon": "store",
        "short_name": "Predaj",
        "anchor": "predaj",
        "items": [
            "predaj antivírusového programu ESET",
            "predaj počítačov a notebookov",
            "zostavenie a predaj počítačov podľa požiadaviek zákazníka",
            "dodanie náhradných zdrojov k notebookom rôznych značiek",
            "dodanie náhradných a originálnych diaľkových ovládačov pre TV, DVD, SAT",
            "na požiadanie dodávame aj iný tovar ako elektronické súčiastky, moduly, meniče, drobné náradie pre elektroniku, lupy, USB mikroskopy, spájkovačky, cín atď..."
        ]
    }
}