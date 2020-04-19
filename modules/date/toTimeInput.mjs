export class append
{
	constructor ( d = Date )
	{
		const FUNCTION_NAME = 'toTimeInput';

		if ( typeof d()[ FUNCTION_NAME ] !== 'function' ) {

			Object.defineProperty( d.prototype, FUNCTION_NAME, {
				value: function ()
				{
					return new d( this.getTime() - ( this.getTimezoneOffset() * 60000 ) ).toISOString().split( 'T' )[ 1 ].substr( 0, 5 );
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
