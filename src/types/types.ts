export interface GQLRequest<T> {
    data: T;
}

export interface Customer {
    name: string;
}

export interface Contact {
    id: string;
    name: string;
    institution: string;
    phoneNumber: number;
    email: string;
    picture: Image | null
}

export interface Recommendation {
    id: string;
    title: string;
    category: string;
    description: {
        html: string;
        markdown: string;
    };
    location: {
        latitude: number;
        longitude: number;
    };
    pictures: Image[]
}

export interface IRecommendations {
    recommendations: Recommendation[];
}

export interface Image {
    url: string;
    fileName: string;
    width: number;
    height: number;
    alt?: string;
}

export interface UserGuide {
    id: string;
    title: string;
    description: string;
    instructions: {
        html: string;
        markdown: string;
    }
    pictures: Image[]
}

export interface CustomersResponse {
    customers: Customer[];
}

export interface ContactsResponse {
    contacts: Contact[];
}

export interface RecommendationsResponse {
    recommendations: Recommendation[];
}