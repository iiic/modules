'use strict';

export class append
{
	constructor ( d = Date )
	{
		const FUNCTION_NAME = 'hashTimestamp';

		/** @returns {String} */
		const common = ( /** @type {Number} */ timestamp ) =>
		{
			let hash = 0;
			const now = String( timestamp );
			for ( let i = 0; i < now.length; i++ ) {
				const character = now.charCodeAt( i );
				hash = ( ( hash << 5 ) - hash ) + character;
				hash = hash & hash; // Convert to 32bit integer
			}
			return Number( hash ).toString( 36 );
		}

		if ( typeof d()[ FUNCTION_NAME ] !== 'function' ) {
			Object.defineProperty( d, 'hashTimestamp', { // without Date constructor
				value: function ()
				{
					return common( this.now() );
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
			Object.defineProperty( d.prototype, 'hashTimestamp', { // with Date constructor
				value: function ()
				{
					return common( this.getTime() );
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
