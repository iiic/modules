'use strict';

export class append
{
	constructor ( a = Array )
	{
		const FUNCTION_NAME = 'frequencyUnique';

		if ( typeof a()[ FUNCTION_NAME ] !== 'function' ) {
			Object.defineProperty( a.prototype, FUNCTION_NAME, {
				value: function ()
				{
					const arr = [];
					const o = {};

					const arrLen = this.length;
					let item;
					for ( let i = 0; i < arrLen; i++ ) {
						item = this[ i ];
						if ( !item ) {
							continue;
						}
						if ( o[ item ] === 'undefined' ) {
							o[ item ] = 1;
						} else {
							++o[ item ];
						}
					}
					for ( const i in o ) {
						arr[ arr.length ] = i;
					}
					return arr.sort( function ( arr, b )
					{
						return o[ b ] - o[ arr ];
					} );
				},
				writable: false,
				configurable: false,
				enumerable: false,
			} );
		}
	}
}
