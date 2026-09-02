export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: 'heart' | 'music' | 'party' | 'utensils' | 'ring';
}

export interface WeddingData {
  brideName: string;
  groomName: string;
  brideFullName: string;
  groomFullName: string;
  brideParents: string;
  groomParents: string;
  weddingDate: string; // ISO or parseable string
  weddingDateFormatted: string;
  ceremonyTime: string;
  poruwaTime: string;
  receptionTime: string;
  ceremonyVenue: {
    name: string;
    location: string;
    mapUrl: string;
    embedMapUrl: string;
  };
  receptionVenue: {
    name: string;
    location: string;
    mapUrl: string;
    embedMapUrl: string;
  };
  contacts: {
    groomPhone: string;
    groomPhoneFormatted: string;
    bridePhone: string;
    bridePhoneFormatted: string;
  };
  heroImage: string;
  protagonistsImage: string;
  sacredUnionImage: string;
  timeline: TimelineEvent[];
  galleryImages: {
    url: string;
    caption: string;
  }[];
}

export const weddingData: WeddingData = {
  brideName: "Priyangika",
  groomName: "Kavindu",
  brideFullName: "Priyangika",
  groomFullName: "Kavindu",
  brideParents: "Daughter of Loving Parents",
  groomParents: "Son of Loving Parents",
  weddingDate: "2029-07-16T08:00:00",
  weddingDateFormatted: "Thursday, 16 July 2029",
  ceremonyTime: "08:00 AM",
  poruwaTime: "11:27 AM",
  receptionTime: "12:30 PM Onwards",
  ceremonyVenue: {
    name: "St. Sebastian's Shrine",
    location: "Katuneriya",
    mapUrl: "https://maps.app.goo.gl/y9d1g6KcNMNJmfNn7",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5312!2d79.845!3d7.305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTgnMTguMCJOIDc5wrA1MCc0Mi4wIkU!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
  },
  receptionVenue: {
    name: "Senuri Grand Castello",
    location: "Divulapitiya",
    mapUrl: "https://maps.app.goo.gl/kz3ev3zUDhr9S4WZ7",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8256!2d79.9912!3d7.1685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTAnMDYuNiJOIDc5wrA1OScyOC4zIkU!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk"
  },
  contacts: {
    groomPhone: "+94768079771",
    groomPhoneFormatted: "076 807 9771",
    bridePhone: "+94766720606",
    bridePhoneFormatted: "076 672 0606"
  },
  heroImage: "/images/hero_couple_new.png",
  protagonistsImage: "/images/2.jpg",
  sacredUnionImage: "/images/3.png",
  timeline: [
    {
      time: "07:30 AM",
      title: "Guest Arrival",
      description: "Welcoming our loved ones to St. Sebastian's Shrine, Katuneriya",
      icon: "heart"
    },
    {
      time: "08:00 AM",
      title: "Wedding Ceremony",
      description: "The sacred exchange of vows at the church",
      icon: "music"
    },
    {
      time: "11:27 AM",
      title: "Poruwa Ceremony",
      description: "Traditional Poruwa Ceremony at Senuri Grand Castello",
      icon: "heart"
    },
    {
      time: "12:30 PM",
      title: "Reception Begins",
      description: "Welcome to Senuri Grand Castello, Divulapitiya",
      icon: "party"
    },
    {
      time: "01:30 PM",
      title: "Wedding Feast",
      description: "A grand celebratory lunch with family & friends",
      icon: "utensils"
    }
  ],
  galleryImages: [
    {
      url: "/images/4.jpg",
      caption: "Eternal Moments"
    },
    {
      url: "/images/5.jpg",
      caption: "The Journey Begins"
    },
    {
      url: "/images/6.png",
      caption: "Love & Grace"
    },
    {
      url: "/images/7.png",
      caption: "Together Forever"
    },
    {
      url: "/images/8.png",
      caption: "Our Promise"
    }
  ]
};
