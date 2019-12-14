'use strict';

export class append
{
	constructor ( s = String )
	{
		const FUNCTION_NAME = 'hashCode';

		if ( typeof s()[ FUNCTION_NAME ] !== 'function' ) {

			Object.defineProperty( s.prototype, FUNCTION_NAME, {
				value: function ()
				{
					let hash = 0;
					for ( let i = 0; i < this.length; i++ ) {
						const character = this.charCodeAt( i );
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
