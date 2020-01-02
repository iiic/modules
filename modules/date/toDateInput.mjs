'use strict';

export class append
{
	constructor ( d = Date )
	{
		const FUNCTION_NAME = 'toDateInput';

		if ( typeof d()[ FUNCTION_NAME ] !== 'function' ) {

			Object.defineProperty( d.prototype, FUNCTION_NAME, {
				value: function ()
				{
					return new d( this.getTime() - ( this.getTimezoneOffset() * 60000 ) ).toISOString().split( 'T' )[ 0 ];
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
