export class append
{
	constructor ( s = String )
	{
		const FUNCTION_NAME = 'capitalize';

		if ( typeof s()[ FUNCTION_NAME ] !== 'function' ) {
			Object.defineProperty( s.prototype, FUNCTION_NAME, {
				value: function ()
				{
					return this[ 0 ].toUpperCase() + this.slice( 1 );
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
