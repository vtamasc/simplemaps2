var simplemaps_canadamap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    label_color: "",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    back_image: "no",
    arrow_color: "#3B729F",
    arrow_color_border: "#88A4BC",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    AB: {
      name: "Alberta",
      color: "#D3D3D3",
      hover_color: "#387843",
      description: "Edmunton <br>Edmunton<br>Edmunton<br>Edmunton<br>Edmunton"
    },
    BC: {
      name: "British Columbia",
      color: "#D3D3D3",
      hover_color: "#387843"
    },
    SK: {
      name: "Saskatchewan",
      color: "#D3D3D3",
      hover_color: "#387843"
    },
    MB: {
      name: "Manitoba",
      color: "#D3D3D3",
      hover_color: "#387843"
    },
    ON: {
      name: "Ontario",
      color: "#D3D3D3",
      hover_color: "#387843"
    },
    QC: {
      name: "Quebec",
      color: "#D3D3D3",
      hover_color: "#387843"
    },
    NB: {
      name: "New Brunswick",
      color: "#D3D3D3",
      hover_color: "#387843"
    },
    PE: {
      name: "Prince Edward Island",
      color: "#D3D3D3",
      hover_color: "#387843"
    },
    NS: {
      name: "Nova Scotia",
      color: "#D3D3D3",
      hover_color: "#387843"
    },
    NL: {
      name: "Newfoundland",
      color: "#D3D3D3",
      hover_color: "#387843"
    },
    NU: {
      color: "#D3D3D3",
      hover_color: "#387843",
      name: "Nunavut"
    },
    NT: {
      name: "Northwest Territories",
      color: "#D3D3D3",
      hover_color: "#387843"
    },
    YT: {
      name: "Yukon",
      color: "#D3D3D3",
      hover_color: "#387843"
    }
  },
  locations: {},
  labels: {
    PE: {
      x: 960,
      y: 814,
      parent_id: "PE",
      width: 65
    },
    NS: {
      x: 960,
      y: 854,
      parent_id: "NS",
      width: 65
    },
    AB: {
      x: 232,
      y: 657,
      parent_id: "AB"
    },
    BC: {
      x: 117,
      y: 635,
      parent_id: "BC"
    },
    YT: {
      x: 75,
      y: 440,
      parent_id: "YT"
    },
    NT: {
      x: 225,
      y: 471,
      parent_id: "NT"
    },
    NU: {
      x: 429,
      y: 478,
      parent_id: "NU"
    },
    SK: {
      x: 332,
      y: 670,
      parent_id: "SK"
    },
    MB: {
      x: 430,
      y: 675,
      parent_id: "MB"
    },
    NL: {
      x: 840,
      y: 643,
      parent_id: "NL"
    },
    NB: {
      x: 837,
      y: 798,
      parent_id: "NB"
    },
    ON: {
      x: 552,
      y: 747,
      parent_id: "ON"
    },
    QC: {
      x: 718,
      y: 704,
      parent_id: "QC"
    }
  },
  legend: {
    entries: []
  },
  regions: {
    "0": {
      states: [],
      color: "#D3D3D3"
    }
  }
};