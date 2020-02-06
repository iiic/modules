'use strict';

export class append
{
	constructor ( u = URL )
	{
		const FUNCTION_NAME = 'hrefHash';

		if ( typeof u()[ FUNCTION_NAME ] !== 'function' ) {

			Object.defineProperty( u.prototype, FUNCTION_NAME, {
				value: function ()
				{
					let hash = 0;
					for ( let i = 0; i < this.href.length; i++ ) {
						const character = this.href.charCodeAt( i );
						hash = ( ( hash << 5 ) - hash ) + character;
						hash = hash & hash; // Convert to 32bit integer
					}
					return hash;
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
