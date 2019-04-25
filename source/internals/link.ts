/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as RestDB from '@singleware/restdb';

/**
 * Addon link, entity class.
 */
@RestDB.Schema.Entity('addons/link')
@Class.Describe()
export class Link extends Class.Null {
  /**
   * Link title.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public title!: string;

  /**
   * Link url.
   */
  @RestDB.Schema.Required()
  @RestDB.Schema.String()
  @Class.Public()
  public url!: string;
}
