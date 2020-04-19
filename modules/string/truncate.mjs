export class append
{
	constructor ( s = String )
	{
		const FUNCTION_NAME = 'truncate';

		if ( typeof s()[ FUNCTION_NAME ] !== 'function' ) {
			const CHAR_HORIZONTAL_ELLIPSIS = '\u{2026}';
			const ASCII_NULL = '\x00';
			const ASCII_COMMERCIAL_AT = '\x40';
			const ASCII_LEFT_SQUARE_BRACKET = '\x5b';
			const ASCII_GRAVE_ACCENT = '\x60';
			const ASCII_LEFT_CURLY_BRACKET = '\x7b';
			const ASCII_DELETE = '\x7f';

			Object.defineProperty( s.prototype, FUNCTION_NAME, {
				value: function ( /** @type {Number} */ maxLength, /** @type {String} */ append = CHAR_HORIZONTAL_ELLIPSIS )
				{
					if ( Number( maxLength ) <= 0 ) {
						return '';
					} else if ( this.length > maxLength ) {
						const regular = new RegExp( '^.{1,' + maxLength + '}(?=[\s' + ASCII_NULL + '-' + ASCII_COMMERCIAL_AT + ASCII_LEFT_SQUARE_BRACKET + '-' + ASCII_GRAVE_ACCENT + ASCII_LEFT_CURLY_BRACKET + '-' + ASCII_DELETE + '])', 'u' );
						let parts = [];
						maxLength = maxLength - append.length;
						if ( maxLength < 1 ) {
							return append;
						} else if ( parts = this.match( regular ) ) {
							return parts[ 0 ] + append;
						} else {
							return this.substring( 0, maxLength ) + append;
						}
					}
					return this;
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
