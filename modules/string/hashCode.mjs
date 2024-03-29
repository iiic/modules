export class append
{
	constructor ( s = String )
	{

		/** @type {String} */
		const FUNCTION_NAME = 'hashCode';

		if ( !s.prototype.hasOwnProperty( FUNCTION_NAME ) ) {
			Object.defineProperty( s.prototype, FUNCTION_NAME, {

				/** @returns {String} */
				value: function ()
				{
					let hash = 0;
					for ( let i = 0; i < this.length; i++ ) {
						const character = this.charCodeAt( i );
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
}
