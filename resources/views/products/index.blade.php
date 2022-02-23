@section('titulo')
<h2>Listado de productos</h2>
@forelse ($products as $product)
<a href="{{route('products.show', $product->slug)}}">{{$product->name}} </a>
@empty
No hay productos
@endforelse
@endsection

