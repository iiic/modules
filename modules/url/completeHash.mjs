export class append
{
	constructor ( u = URL )
	{
		Object.defineProperty( u.prototype, 'completeHash', {
			/** @returns {String} */
			value: function ()
			{
				let hash = 0;
				const link = String( this.href );
				for ( let i = 0; i < link.length; i++ ) {
					const character = link.charCodeAt( i );
					hash = ( ( hash << 5 ) - hash ) + character;
					hash = hash & hash; // Convert to 32bit integer
				}
				return Number( hash ).toString( 36 );
			},
			writable: false,
			configurable: false,
			enumerable: false,
		} );
	}
}
