/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import empty = require( '@stdlib/ndarray-base-empty' );
import MultiSlice = require( '@stdlib/slice-multi' );
import slice = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const order = 'row-major';
	const sh = [ 2, 2 ];
	const s = new MultiSlice( null, null );

	slice( empty( 'float64', sh, order ), s, false ); // $ExpectType float64ndarray
	slice( empty( 'float32', sh, order ), s, false ); // $ExpectType float32ndarray
	slice( empty( 'complex128', sh, order ), s, false ); // $ExpectType complex128ndarray
	slice( empty( 'complex64', sh, order ), s, false ); // $ExpectType complex64ndarray
	slice( empty( 'int32', sh, order ), s, false ); // $ExpectType int32ndarray
	slice( empty( 'int16', sh, order ), s, false ); // $ExpectType int16ndarray
	slice( empty( 'int8', sh, order ), s, false ); // $ExpectType int8ndarray
	slice( empty( 'uint32', sh, order ), s, false ); // $ExpectType uint32ndarray
	slice( empty( 'uint16', sh, order ), s, false ); // $ExpectType uint16ndarray
	slice( empty( 'uint8', sh, order ), s, false ); // $ExpectType uint8ndarray
	slice( empty( 'uint8c', sh, order ), s, false ); // $ExpectType uint8cndarray

	slice( empty( 'float64', sh, order ), s, true ); // $ExpectType float64ndarray
	slice( empty( 'float32', sh, order ), s, true ); // $ExpectType float32ndarray
	slice( empty( 'complex128', sh, order ), s, true ); // $ExpectType complex128ndarray
	slice( empty( 'complex64', sh, order ), s, true ); // $ExpectType complex64ndarray
	slice( empty( 'int32', sh, order ), s, true ); // $ExpectType int32ndarray
	slice( empty( 'int16', sh, order ), s, true ); // $ExpectType int16ndarray
	slice( empty( 'int8', sh, order ), s, true ); // $ExpectType int8ndarray
	slice( empty( 'uint32', sh, order ), s, true ); // $ExpectType uint32ndarray
	slice( empty( 'uint16', sh, order ), s, true ); // $ExpectType uint16ndarray
	slice( empty( 'uint8', sh, order ), s, true ); // $ExpectType uint8ndarray
	slice( empty( 'uint8c', sh, order ), s, true ); // $ExpectType uint8cndarray
}

// The compiler throws an error if the function is provided a first argument which is not an ndarray...
{
	const s = new MultiSlice( null, null );

	slice( '10', s, false ); // $ExpectError
	slice( 10, s, false ); // $ExpectError
	slice( false, s, false ); // $ExpectError
	slice( true, s, false ); // $ExpectError
	slice( null, s, false ); // $ExpectError
	slice( [], s, false ); // $ExpectError
	slice( {}, s, false ); // $ExpectError
	slice( ( x: number ): number => x, s, false ); // $ExpectError

	slice( '10', s, true ); // $ExpectError
	slice( 10, s, true ); // $ExpectError
	slice( false, s, true ); // $ExpectError
	slice( true, s, true ); // $ExpectError
	slice( null, s, true ); // $ExpectError
	slice( [], s, true ); // $ExpectError
	slice( {}, s, true ); // $ExpectError
	slice( ( x: number ): number => x, s, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a multi-slice object...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );

	slice( x, '5', false ); // $ExpectError
	slice( x, 5, false ); // $ExpectError
	slice( x, false, false ); // $ExpectError
	slice( x, true, false ); // $ExpectError
	slice( x, null, false ); // $ExpectError
	slice( x, undefined, false ); // $ExpectError
	slice( x, [ '5' ], false ); // $ExpectError
	slice( x, {}, false ); // $ExpectError
	slice( x, ( x: number ): number => x, false ); // $ExpectError


	slice( x, '5', true ); // $ExpectError
	slice( x, 5, true ); // $ExpectError
	slice( x, false, true ); // $ExpectError
	slice( x, true, true ); // $ExpectError
	slice( x, null, true ); // $ExpectError
	slice( x, undefined, true ); // $ExpectError
	slice( x, [ '5' ], true ); // $ExpectError
	slice( x, {}, true ); // $ExpectError
	slice( x, ( x: number ): number => x, true ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new MultiSlice( null, null );

	slice( x, s, '5' ); // $ExpectError
	slice( x, s, 5 ); // $ExpectError
	slice( x, s, null ); // $ExpectError
	slice( x, s, undefined ); // $ExpectError
	slice( x, s, [ '5' ] ); // $ExpectError
	slice( x, s, {} ); // $ExpectError
	slice( x, s, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = empty( 'float64', [ 2, 2 ], 'row-major' );
	const s = new MultiSlice( null, null );

	slice( x ); // $ExpectError
	slice( x, s ); // $ExpectError
	slice( x, s, false, {} ); // $ExpectError
}
