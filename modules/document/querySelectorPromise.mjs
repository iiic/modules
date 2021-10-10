export class append
{
	constructor ( d = Document )
	{
		const FUNCTION_NAME = 'querySelectorPromise';

		if ( typeof d.prototype[ FUNCTION_NAME ] !== 'function' ) {
			/**
				* @public
				* @name querySelectorPromise
				* @description querySelectorPromise() is small javascript to add querySelectorPromise() into document.Work's like normal querySelector(), but can be used before HTML element
				* @author ic < ic.czech@gmail.com >
				* @see https://iiic.dev/#querySelectorPromise
				* @license https://creativecommons.org/licenses/by-sa/4.0/legalcode.cs CC BY-SA 4.0
				* @since Q4 2021
				* @version 1.0
				*/
			Object.defineProperty( d.prototype, FUNCTION_NAME, {
				value: function ( /** @type {String} */ selector )
				{
					return new Promise( function ( /** @type {Function} */ resolve )
					{

						/** @type {HTMLElement | null} */
						const element = ( document.querySelector( selector ) );

						if ( element ) {
							return resolve( element );
						}

						const observer = new MutationObserver( function ( /** @type {Array} */ mutations )
						{
							mutations.forEach( function ( /** @type {MutationRecord} */ mutation )
							{
								[ ...mutation.addedNodes ].forEach( function ( /** @type {HTMLElement | Text} */ node )
								{
									if ( node.nodeType === Node.ELEMENT_NODE ) {

										/** @type {HTMLElement} */
										const element = ( node );

										if ( element.matches( selector ) ) {
											observer.disconnect();
											return resolve( element );
										}

										[ ...element.getElementsByTagName( '*' ) ].forEach( function ( /** @type {Element} */ element )
										{
											if ( element.matches( selector ) ) {
												observer.disconnect();
												return resolve( element );
											}
										} );
									}
								} );
							} );
						} );
						observer.observe( document.documentElement, {
							childList: true,
							subtree: true
						} );
					} );
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
