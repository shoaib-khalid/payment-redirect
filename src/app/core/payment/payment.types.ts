export interface Store
{
    id: string;
    name: string;
    storeDescription?: string;
    storeLogo: string;
    slug?: string;
    domain?: string;
    email?: string;
    googleAnalyticId?: string;
    phoneNumber?: string;
    address?: string;
    postcode?: string;
    regionCountryStateId?: string;
    paymentType?: string;
    city?: string;
    verticalCode?: string;
    category?: string;
    storeTiming?: StoreTiming[];
    type?: string;
    totalSteps?: number;
    updatedAt?: number;
    progress?: {
        currentStep?: number;
        completed?: number;
    };
    regionCountry: StoreRegionCountry,
    serviceChargesPercentage?: number;
    duration?: number;
    featured?: boolean;
    completed?: number;
    currentStep?: number;
    storeAsset?: StoreAsset;
    storeAssets?: StoreAssets[];
    storeLogoUrl: string;
    displayAddress: string;
    // isSnooze: boolean;
    // snoozeEndTime: string;
    // snoozeReason: boolean;
    storeSnooze: StoreSnooze;
    storeDeliveryDetail :StoreDeliveryDetails;
}

export interface StoreTiming
{
    closeTime: string;
    day: string;
    isOff: boolean;
    openTime: string;
    breakStartTime: string;
    breakEndTime: string;
}

export interface StoreRegionCountry
{
    id: string;
    name: string;
    region: string;
    currency: string;
    currencyCode: string;
    currencySymbol: string;
    timezone: string;
    countryCode?: string; // need taufik to add in backend
}

export interface StoreAsset
{
    bannerMobileUrl?: string;
    bannerUrl?: string;
    logoUrl?: string;
    storeId?: string;
}

export interface StoreAssets
{
    assetDescription: string;
    assetFile: string;
    assetType: string;
    assetUrl: string;
    id: string;
    storeId: string;
}

export interface StoreSnooze
{
    isSnooze: boolean;
    snoozeEndTime: string;
    snoozeReason: string;
    snoozeStartTime: string;
}

export interface StoreDeliveryDetails
{
    allowsStorePickup: boolean;
    itemType: string;
    maxOrderQuantityForBike: number;
    storeId: string;
    type: string;
}