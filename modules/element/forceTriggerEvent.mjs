export class append
{
	constructor ( e = HTMLElement )
	{
		const FUNCTION_NAME = 'forceTriggerEvent';

		if ( typeof e.prototype[ FUNCTION_NAME ] !== 'function' ) {
			Object.defineProperty( e.prototype, FUNCTION_NAME, {
				value: function ( /** @type {String} */ eventName = 'change' )
				{
					const VALUE = 'value';
					const SELECTED_INDEX = 'selectedIndex';

					/** @type {HTMLElement} */
					const element = this;

					/** @type {Object} */
					const valueDescriptor = Object.getOwnPropertyDescriptor( Object.getPrototypeOf( element ), VALUE );

					Object.defineProperty( element, VALUE, {
						set: function ()
						{
							element.dispatchEvent( new Event( eventName ) );
							return valueDescriptor.set.apply( this, arguments );
						},
						get: function ()
						{
							return valueDescriptor.get.apply( this );
						}
					} );

					/** @type {Object} */
					const selectedIndexDescriptor = Object.getOwnPropertyDescriptor( Object.getPrototypeOf( element ), SELECTED_INDEX );

					Object.defineProperty( element, SELECTED_INDEX, {
						set: function ()
						{
							element.dispatchEvent( new Event( eventName ) );
							return valueDescriptor.set.apply( this, arguments );
						},
						get: function ()
						{
							return valueDescriptor.get.apply( this );
						}
					} );
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
