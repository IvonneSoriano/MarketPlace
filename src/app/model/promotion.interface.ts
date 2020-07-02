import { NumberValueAccessor } from '@angular/forms'

export interface PromotionInterface{
    id?: number;
    name: string;
    shopId?: number;
    menuId?: number;
    promotionDetails?:[{
        "nameProduct":string;
        "quantity": number;
    }];
    totalPrice: number;
    status: number;
}

