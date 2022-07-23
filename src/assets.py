from flask_assets import Bundle

bundles = {
    'global_js': Bundle(
        'js/jquery-3.6.0.min.js',
        'js/materialize-1.1.0.min.js',
        output='js/gen/global.js',
        filters='jsmin'
    ),
    'global_css': Bundle(
        'css/material-icons-v135-swap.css',
        'css/materialize-1.1.0.min.css',
        output='css/gen/global.css',
        filters='cssmin'
    ),
    'index_js': Bundle(
        'js/jquery-ui-1.13.2.bounce-only.js',
        'js/ScrollMagic-2.0.7.min.js',
        'js/leaflet-1.8.0.js',
        'js/Leaflet.Fullscreen-2.4.0.js',
        'js/Leaflet.ResetView-1.1.1.min.js',
        output='js/gen/index.js',
        filters='jsmin'
    ),
    'index_css': Bundle(
        'css/leaflet-1.8.0.css',
        'css/Leaflet.Fullscreen-2.4.0.css',
        'css/Leaflet.ResetView-1.1.1.min.css',
        output='css/gen/index.css',
        filters='cssmin'
    )
}