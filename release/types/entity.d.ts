/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Categories from '@juridoc/client-categories';
import * as Internals from './internals';
/**
 * Addon entity class.
 */
export declare class Entity extends Class.Null {
    /**
     * Addon Id.
     */
    id: string;
    /**
     * Category Id.
     */
    categoryId: string;
    /**
     * Category.
     */
    category: Categories.Entity;
    /**
     * Roles Id list.
     */
    rolesIdList: string[];
    /**
     * Creation date.
     */
    createdAt: Date;
    /**
     * Addon title.
     */
    title: string;
    /**
     * Brief description content.
     */
    brief: string;
    /**
     * Full description (content in HTML format).
     */
    description: string;
    /**
     * Addon images.
     */
    images: string[];
    /**
     * Addon links.
     */
    links: Internals.Link[];
    /**
     * Countries that support this addon.
     */
    countryCodeList: string[];
}
