export interface ProjectCardInterface {
    id?: any;
    project: {
        image: string;
        category: string;
        name: string;
        description: string;
        link: string;
       
    }
    specialStyle?: boolean;
}