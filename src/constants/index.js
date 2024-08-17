import { phoneIcon, scooterIcon, bikeIcon, woman, place, wallet, facebook, insta,apple,twitter, playstore, phone, road, phone2, mobility, community, person } from "../utils"

//Navbar
export const navbarLinks = ["About", "Location", "Careers"]

//Home section
export const HERO_SECTION = {
  title: "Scooter sharing made simple",
  description: "Scoot takes the hassle out of urban mobility. Our scooters are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you're away!",
  buttonText: "Get Scootin"
};

export const FEATURES = [
  {
    id: 1,
    icon: phoneIcon,
    title: "Locate with app",
    description: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with the most demand, so one should never be too far away."
  },
  {
    id: 2,
    icon: scooterIcon,
    title: "Pick your scooter",
    description: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
  },
  {
    id: 3,
    icon: bikeIcon,
    title: "Enjoy the ride",
    description: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you will be on your way. Enjoy bike lanes from walkways and accessibility zones."
  },

];

export const EXPANSION = [
  {
    id: 0,
    icon: "right",
    image: woman,
    title: "Coming to a city near you",
    description: "Scoot is available in 4 major cities so far. We're expanding rapidly, so be sure to let us know if you want to see us in your hometown. We're aiming for our scooters to be in 23 cities over the coming year.",
    buttonText: "Learn More"
  },
  {
    id: 1,
    icon: "left",
    image: place,
    title: "Easy to use riding telemetry",
    description: "The Scoot app is available with riding telemetry. This means you can see your average speed, your riding time, and distance. It's a great way to see how well you are riding and if there is any need for improvement."
  },
  {
    id: 2,
    icon: "right",
    image: wallet,
    title: "Zero hassle payments",
    description: "Our payment is as easy as one two three. We accept most credit cards and debit cards. You can also link your PayPal account inside the app. Need to pay later? No worries! You can defer payment for up to a month."
  }
]

//About Page
export const ABOUT_PAGE = {
  header: "About",
  sections: [
    {
      title: "Mobility for the digital era",
      description: "Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips.",
      image: phone,
      icon: "right",
    },
    {
      title: "Better urban living",
      description: "We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride.",
      image: road,
      icon: "left",
    },
  ],
  values: {
    title: "Our values",
    items: [
      {
        title: "Our tech",
        description: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride.",
        image: phone2,
        imageAlt: "Tech",
      },
      {
        title: "Our integrity",
        description: "We are fully committed to delivering a great yet safe, sustainable micro-mobility experience in every city we serve.",
        image: mobility,
        imageAlt: "Integrity",
      },
      {
        title: "Our community",
        description: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
        image:community,
        imageAlt: "Community",
      },
    ],
  },
  faq: {
    title: "FAQs",
    driving:[
      {
        question: "Should I wear a helmet?",
        answer: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
      },
      {
        question: "How about the rules & regulations?",
        answer: "Please refer to your local regulations and laws for any specific requirements regarding scooter usage."
      },
      {
        question: "What if I damage my Scoot?",
        answer: "If you damage your Scoot, please report it immediately to our support team via the app. We’ll provide instructions on what to do next."
      }
    ],
    works: [
      {
        question: "How do I download the app?",
        answer: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to download the app is to click the relevant link at the bottom of this page and you’ll be redirected to the correct page."
      },
      {
        question: "Can I find a nearby Scoots?",
        answer: "Yes, please! All cities have different laws, but we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
      },
      {
        question: "Do I need a license to ride?",
        answer: "This will vary based on your location, so we recommend checking with your local authorities for the most accurate information."
      },
    ],
  }
};

//FOOTER
export const FOOTER = {
  signUpHeading: "Sign up and Scoot off today",
  stores: [{
    text1: "Available on the",
    text2:"AppStore",
    image: apple,
  },
  {
    text1: "Get it on",
    text2:"GooglePlay",
    image: playstore,
  }],
  brandName: "scoot",
  navLinks: ["About", "Location", "Careers"],
  socialMedia: [facebook, twitter, insta],
};


//Career
export const CAREER_DATA = {
  heroSection: {
    title: "Care to join our mission?",
    image: person,
    description: " We're always looking for ambitious individuals to help us on our journey. If you're passionate about our mission to provide clean, accessible transport to improve urban living, we'd love to hear from you!",
    buttonText: "Say Hello"
  },
  whyJoinUs: {
    title: "Why join us?",
    reasons: [
      {
        id: 1,
        image: phone2,
        title: "Our tech",
        description: "We're using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
      },
      {
        id: 2,
        image: mobility,
        title: "Our integrity",
        description: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
      },
      {
        id: 3,
        image: community,
        title: "Our community",
        description: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
      }
    ]
  },
  jobListings: {
    title: "Current Job Openings",
    jobs: [
      {
        id: 1,
        title: "General Manager",
        location: "Jakarta, Indonesia",
        buttonText: "Apply"
      },
      {
        id: 2,
        title: "UI/UX Designer",
        location: "Yokohama, Japan",
        buttonText: "Apply"
      },
      {
        id: 3,
        title: "Blog Content Copywriter",
        location: "New York, United States",
        buttonText: "Apply"
      },
      {
        id: 4,
        title: "Graphic Designer",
        location: "New York, United States",
        buttonText: "Apply"
      },
      {
        id: 5,
        title: "UX Analyst",
        location: "London, United Kingdom",
        buttonText: "Apply"
      },
      {
        id: 6,
        title: "Fleet Supervisor",
        location: "Jakarta, Indonesia",
        buttonText: "Apply"
      }
    ]
  },

};


// Locations

export const LOCATIONS_TITLE = "Locations";

export const LOCATIONS = [
  "New York",
  "London",
  "Jakarta",
  "Yokohama"
];

export const CITY_NOT_LISTED = {
  message: "Your City Not Listed?",
  description: "If you'd like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.",
  buttonText: "Message Us"
};

export const SIDEBAR = {
  links:["about", "location", "careers"],
  btnText: "Get Scootin"
}

