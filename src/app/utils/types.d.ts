type Product = {
    id: string
    title:string
    status:boolean
    image: string
    price: number
    createdAt: Date | string
    updatedAt: Date | string
    destroyTime? : Date | string
}

type ParamsType = {
    id?: string | string[];
    limit: number | string;
    sort?: string | number;
    keyword?: any;
    status?: string;
};

