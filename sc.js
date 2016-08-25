

SC.initialize({
  client_id: 'cb119803d4123d468c762b4d81f70513'
});

var track_url = 'https://soundcloud.com/l_e_f_t/trust';
SC.oEmbed(track_url, { auto_play: true }, {theme_color: "#421C52"} ).then(function(oEmbed) {
  console.log('oEmbed response: ', oEmbed);
});

SC.oEmbed('https://soundcloud.com/l_e_f_t/trust', {
    element: document.getElementById('widget')
  });
