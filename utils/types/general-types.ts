export interface CloudnaryImage {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
}

export interface EventAttributes {
  name: string;
  slug: string;
  venue: string;
  address: string;
  performers: string;
  date: string;
  time: string;
  description: string;
  image: CloudnaryImage;
}

export interface Event {
  id: number;
  attributes: EventAttributes;
}

export interface EventResponce {
  data: Event[];
}

export interface EventSlug {
  0: Event;
}
