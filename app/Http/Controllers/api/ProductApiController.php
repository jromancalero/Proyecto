<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */


    public function store(Request $request)
    {
        $product = new Product();

        $product->price = 0;
        $product->numSell = 0;

        $nombreProducto = $request->name;
        if ($nombreProducto === '' || $nombreProducto == null || is_numeric($nombreProducto)) {
            return "El nombre no es correcto";
        } else {
            $product->name = $nombreProducto;
        }

        $precioProducto = $request->price;
        if (is_float($precioProducto) || is_integer($precioProducto)) {
            $product->price = $precioProducto;
        } else {
            return "El precio no es valido";
        }

        $tasaProducto = $request->taxe;
        if (is_int($tasaProducto)) {
            $product->taxe = $tasaProducto;
        } else {
            return "La tasa ha de ser un numero";
        }

        $descuentoProducto = $request->discount;
        if (is_int($descuentoProducto)) {
            $product->discount = $descuentoProducto;
        } else {
            return "El descuento ha de ser un numero";
        }

        $categoria = $request->category;
        $categoria = trim($categoria);
        if ($categoria === "Muebles" || $categoria === "Patas" || $categoria === "Espejos" || $categoria === "Accesorios") {
            $product->category = $categoria;
        } else {
            return "La categoria ha de ser Muebles, Patas, Espejos o Accesorios";
        }

        $estilo=$request->style;
        if($estilo === "Nordico" || $estilo === "Industrial" || $estilo === "Boho" || $estilo === "Glamour" ){
            $product->style=$estilo;
        }else{
            return "El estilo ha de ser Nordico, Industrial, Boho o Glamour";
        }
        $category_id = $request->category_id;
        if($categoria === "Muebles"){
            $category_id = 1;
            $product->category_id = $category_id;
        }else if($categoria === "Patas"){
            $category_id = 2;
            $product->category_id = $category_id;
        }else if($categoria === "Espejos"){
            $category_id = 3;
            $product->category_id = $category_id;
        }else if($categoria === "Accesorios"){
            $category_id = 4;
            $product->category_id = $category_id;
        }

        $product->description = $request->description;
        $product->image = $request->image;
        $product->save();

        return response()->json(["nombre" => $product->name], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */






    public function update(Request $request, Product $product)
    {
        $product = new Product();
        $product->name = $request->name;
        $product->price = $request->price;
        $product->taxe = $request->taxe;
        $product->discount = $request->discount;
        $product->image = $request->image;
        $product->category = $request->category;

        $product->save();

        return response()->json(["nombre" => $product->name], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $product = Product::destroy($request->id);
        return "El producto " . $product . "ha sido eliminado";
    }
}
