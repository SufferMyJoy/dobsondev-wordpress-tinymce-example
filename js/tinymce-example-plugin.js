(function() {
    tinymce.PluginManager.add('dobsondev_tinymce_example_plugin', function( editor, url ) {

        // example of a text label button
        editor.addButton( 'dobsondev_tinymce_example_text_button', {
            title: 'Example Text Label Button',
            text: 'Example Text Label Button',
            icon: false,
            onclick: function() {
                editor.insertContent('Example Text Label Button');
            }
        });

        // example of a standard icon labelled button
        editor.addButton( 'dobsondev_tinymce_example_icon_button', {
            title: 'Example Standard Icon Button',
            icon: 'wp_code',
            onclick: function() {
                editor.insertContent('Example Standard Icon Button');
            }
        });

        // example of a dashicons icon labelled button
        editor.addButton( 'dobsondev_tinymce_example_dashicons_button', {
            title: 'Example Dashicons Button',
            icon: 'icon dashicons-admin-post',
            onclick: function() {
                editor.insertContent('Example Dashicons Icon Button');
            }
        });

        // example of a custom (using your own graphic) icon labelled button
        editor.addButton( 'dobsondev_tinymce_example_custom_icon_button', {
            title: 'Example Custom Icon Button',
            icon: 'icon dobsondev-icon',
            onclick: function() {
                editor.insertContent('Example Dashicons Icon Button');
            }
        });

        // example of a custom (using your own graphic) icon labelled button
        // with a text label as well
        editor.addButton( 'dobsondev_tinymce_example_custom_icon_text_button', {
            title: 'Example Custom Icon with Text',
            text: 'Icon w/ Text',
            icon: 'icon dobsondev-icon',
            onclick: function() {
                editor.insertContent('Example Dashicons Icon with Text');
            }
        });

        // example of a dashicons icon labelled button with a sub menu
        editor.addButton( 'dobsondev_tinymce_example_sub_menu_button', {
            title: 'Example Sub Menu Button',
            type: 'menubutton',
            icon: 'icon dashicons-filter',
            menu: [{
                text: 'Sub Menu Item #1',
                value: 'Value for Sub Menu Item #1',
                onclick: function() {
                    editor.insertContent(this.value());
                }
            },
            {
                text: 'Sub Menu Item #2',
                icon: 'icon dashicons-admin-site',
                value: 'Value for Sub Menu Item #2',
                onclick: function() {
                    editor.insertContent(this.value());
                }
            }]
        });

        // example of a dashicons icon labelled button with a sub menu with
        // the sub menu items being labelled with an icon as well as text
        editor.addButton( 'dobsondev_tinymce_example_sub_menu_icon_button', {
            title: 'Example Sub Menu with Icons Button',
            type: 'menubutton',
            icon: 'icon dashicons-filter',
            menu: [{
                text: 'Sub Menu Item with Icon #1',
                icon: 'icon dashicons-admin-site',
                value: 'Value for Sub Menu with Icon Item #1',
                onclick: function() {
                    editor.insertContent(this.value());
                }
            },
            {
                text: 'Sub Menu Item with Icon #2',
                icon: 'icon dashicons-admin-site',
                value: 'Value for Sub Menu with Icon Item #2',
                onclick: function() {
                    editor.insertContent(this.value());
                }
            }]
        });

        // example of a dashicons icon labelled button with a sub menu and
        // where that sub menu also has its own sub menu (ie. sub sub menu)
        editor.addButton( 'dobsondev_tinymce_example_sub_sub_menu_button', {
            title: 'Example Sub Sub Menu',
            type: 'menubutton',
            icon: 'icon dashicons-networking',
            menu: [
                {
                    text: 'Sub Menu Item #1',
                    value: 'Value for Sub Menu Item #1',
                    onclick: function() {
                        editor.insertContent(this.value());
                    }
                },
                {
                    text: 'Sub Menu Item #2',
                    value: 'Value for Sub Menu Item #2',
                    onclick: function() {
                        editor.insertContent(this.value());
                    },
                    menu: [
                        {
                            text: 'Sub-Sub Menu Item #1',
                            value: 'Value for Sub-Sub Menu Item #1',
                            onclick: function(e) {
                                e.stopPropagation(); // we need this to ensure the parent item's value isn't also displayed
                                editor.insertContent(this.value());
                            }
                        },
                        {
                            text: 'Sub-Sub Menu Item #2',
                            value: 'Value for Sub-Sub Menu Item #2',
                            onclick: function(e) {
                                e.stopPropagation(); // we need this to ensure the parent item's value isn't also displayed
                                editor.insertContent(this.value());
                            }
                        }
                    ]
                },
                {
                    text: 'Sub Menu Item #3',
                    value: 'Value for Sub Menu Item #3',
                    onclick: function() {
                        editor.insertContent(this.value());
                    }
                }
           ]
        });

        // example of a dashicons icon labelled button that when pressed results
        // in a popup window appearing
        editor.addButton( 'dobsondev_tinymce_example_popup_button', {
            title: 'Example Popup Window Button',
            icon: 'icon dashicons-admin-page',
            onclick: function() {
                editor.windowManager.open( {
                    title: 'Insert Whatever',
                    body: [
                    {
                        type: 'textbox',
                        name: 'text',
                        label: 'Whatever'
                    },
                    {
                        type: 'textbox',
                        name: 'text2',
                        label: 'Moar Whatever'
                    }],
                    onsubmit: function( e ) {
                        editor.insertContent( 'This is your whatever: ' + e.data.text + ' ' + e.data.text2 );
                    }
                });
            }
        });

    });
})();