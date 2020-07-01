export interface PromotionInterface{
    id?: number;
    name: string;
    promotionDetails:[{
        "nameProduct":string;
        "quantity": number;
    }];
    "price": number;
}

