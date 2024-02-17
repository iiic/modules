export class append
{
	constructor ( e = Element )
	{

		/** @type {String} */
		const FUNCTION_NAME = 'setMultipleAttributes';

		if ( !e.prototype.hasOwnProperty( FUNCTION_NAME ) ) {
			Object.defineProperty( e.prototype, FUNCTION_NAME, {
				value: function ( /** @type {Object} */ attributes )
				{

					/** @type {Array} */
					const attrNames = Object.keys( attributes );

					attrNames.forEach( ( /** @type {String} */ attrName = '' ) =>
					{
						this.setAttribute( attrName, attributes[ attrName ] );
					} );
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
