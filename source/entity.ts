/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

import * as Categories from '@juridoc/client-categories';

import * as Internals from './internals';

/**
 * Addon entity class.
 */
@RestDB.Schema.Entity('addons')
@Class.Describe()
export class Entity extends Class.Null {
  /**
   * Addon Id.
   */
  @RestDB.Schema.Primary()
  @RestDB.Schema.Id()
  @Class.Public()
  public id!: string;

  /**
   * Category Id.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Id()
  @Class.Public()
  public categoryId!: string;

  /**
   * Category.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Object(() => Categories.Entity, ['name', 'icon', 'color'])
  @Class.Public()
  public category!: Categories.Entity;

  /**
   * Roles Id list.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public rolesIdList!: string[];

  /**
   * Creation date.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Date()
  @Class.Public()
  public createdAt!: Date;

  /**
   * Addon title.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public title!: string;

  /**
   * Brief description content.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public brief!: string;

  /**
   * Full description (content in HTML format).
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public description!: string;

  /**
   * Addon images.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public images!: string[];

  /**
   * Addon links.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(Internals.Link)
  @Class.Public()
  public links!: Internals.Link[];

  /**
   * Countries that support this addon.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.Array(String)
  @Class.Public()
  public countryCodeList!: string[];
}
