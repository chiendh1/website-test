$(".about").load("/about.html");
$(".ui").load("/header.html");

function loadContentWork() {
  let data = [
    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1549998531140-B4WVF1IJ5OX3D2YBCV2G/jim-beam-smart-decanter-full.jpg?format=2500w",
      name: "JIM BEAM",
    },

    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1581437943357-5KTDPQFWNHJ71YJ8FLKH/unnamed+%2819%29.jpg?format=1000w",
      name: "U.S. AIR FORCE",
    },

    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1581443841913-EED6JMVBFISC7O8GI0JV/a3NfgsQ-_400x400.jpg?format=1000w",
      name: "CUISINART",
    },

    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1549996190470-9FPQ3XVRZDPLK6BKC7HJ/gimlet_website_casestudy_image_googlehome.jpg?format=2500w",
      name: "GIMLET",
    },

    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1581437237480-FKRJJWYWRVEGKGTIT0OW/Reebok-Logo.jpg?format=1000w",
      name: "REEBOK",
    },
    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1550106279926-M6KROGJ33AMT4TCAAAPN/Chobani-20180209075016123.JPG?format=1500w",
      name: "CHOBANI",
    },

    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1550105006167-K6L1H6CVZX7SD99CD2EX/GUEST_a15f92e7-63c1-493f-8c4a-598970ba48fe.jpeg?format=1000w",
      name: "WARNER MUSIC</br>GROUP",
    },

    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1581437000050-E446WQWAKY4T27KZMHKY/b54903a89269790ec77f7eda9cd4bb3e.jpg?format=1500w",
      name: "ILLY",
    },

    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1550087382538-FYN1BUT2HTFRK0YWAT5W/purell_kid_low.jpg?format=1500w",
      name: "PURELL",
    },

    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1549999422184-ZBZWGAEOQY4TV7TDH4Q5/HSS_sick_girl_image1.png?format=2500w",
      name: "HSS",
    },

    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1550092056833-2H2PONW5YJGXPB31XCH3/bic_office_assistant_low.jpg?format=2500w",
      name: "BIC",
    },

    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1550266424390-ZL44VI529KORCD0K7WZ5/doctors_wo_borders_googlehome_livingroom_low.jpg?format=1500w",
      name: "DOCTORS WITHOUT BORDERS",
    },

    {
      url: "",
      imgUrl:
        "https://images.squarespace-cdn.com/content/v1/5c587c5f65019f7b1a809d16/1581436849595-M3K0LLESEC541MVXL20E/ng--logo.png?format=1000w",
      name: "NATIONALGRID",
    },
  ];
  data.forEach((element, index) => {
    $("section.journal div.content").append(`
          <article class="post reveal">
                            <div class="info">
                              <a class="cta" href="collaboration/">
                                <h2 class="title">${element.name}</h2>
                                <span class="read-more">read more</span></a
                              >
                            </div>
                            <div class="images">
                              <div
                                class="center image-container parallax-horizontal-tb-bt"
                                data-from="${index % 2 === 0 ? "-100%" : "25%"}"
                                data-to="${index % 2 === 0 ? "25%" : "-25%"}"
                                data-timing="quadOut"
                              >
                                <img
                                  src="${element.imgUrl}"
                                  alt="${element.name}"
                                />
                              </div>
                            </div>
                          </article>
                          
          `);
  });
}

loadContentWork();
