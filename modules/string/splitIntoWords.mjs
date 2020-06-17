export class append
{
	constructor ( s = String )
	{
		const FUNCTION_NAME = 'splitIntoWords';

		if ( typeof s()[ FUNCTION_NAME ] !== 'function' ) {
			Object.defineProperty( s.prototype, FUNCTION_NAME, {
				value: function ( /** @type {String} */ chars )
				{
					const TEMP_SEPARATOR = '{this is temporarily separator string}';

					const regexpChars = chars ? chars : '  	.,;?!…:„“–+-';

					const regexp = new RegExp( '([' + regexpChars + ']+)', 'g' );

					return this.replace( regexp, TEMP_SEPARATOR ).split( TEMP_SEPARATOR );
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
