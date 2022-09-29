
  
 

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');



if(bar){
  bar.addEventListener('click',() =>{
    nav.classList.add('active')
  })
}


var shoppingCart = (function() {

  cart = [];
  
  // Constructor
  class Item {
    constructor(name, price, count, image ,describe) {
      this.name = name;
      this.price = price;
      this.count = count;
      this.image = image;
      this.describe = describe;
    }
  }
  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  
  var obj = {};
  
  // Add to cart
  obj.addItemToCart = function(name, price, count, image,describe) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count,image,describe);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(name, count) {
    for(var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // Remove item from cart
  obj.removeItemFromCart = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }


  return obj;
})();




function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


displayCart();



$('.clear-cart').on('click', function(){
  $('#mainCartIcon').text(0);
})

$('#mainCart').on('click', function(){
  // remove older modal items
  $("#cartItem").nextAll().remove();
    //  cardlist = $("#cartList")
  shoppingCart.listCart().forEach(function(item){
    var cloneCart = $("#cartItem").clone();
    $("#cartList").append(cloneCart)
    // console.log(cloneCart)
    console.log(item)
    cloneCart.removeClass('d-none');
    cloneCart.find('.product-image').attr('src', item.image)
    cloneCart.find('.product-name').text(item.name)
    cloneCart.find('.product-price').text(item.total)
    cloneCart.find('.product-count').text(item.count)

  })
  invokeRemoveItemClickEvent()
  invokeClearAllEvent()
  $('#staticBackdrop').modal('show');
})

function invokeClearAllEvent(){
  $('.clear-cart').on('click', function(){
    $("#cartList").children().not(':first').remove();
  })
}
function invokeRemoveItemClickEvent(){
  $(".removed-button").on('click',function(){
    shoppingCart.removeItemFromCart($(this).find('.product-name').text());
    $(this).closest("#cartItem").remove();
    $('#mainCartIcon').text(shoppingCart.totalCount());
    displayCart();
  });
}





$(document).ready(function() { $('#mainCartIcon').text(shoppingCart.totalCount());});


  var MainImg = document.getElementById("MainImg")
  var smallimg = document.getElementsByClassName('small-img-col-img')
   
  console.log(smallimg)
  smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src
  }
  smallimg[1].onclick = function(){
  MainImg.src = smallimg[1].src
  }
  smallimg[2].onclick = function(){
  MainImg.src = smallimg[2].src
  }
  smallimg[3].onclick = function(){
  MainImg.src = smallimg[3].src
  }
  var arr = [
    {
      id: "1",
      image: "img/products/f1.jpg",
      name: "adidas",
      branch: "Cartoon Astronaut T-Shirts",
      price: "$78"
    },
    {
      id: "2",
      image: "img/products/f2.jpg",
      name: "adidas1",
      branch: "Cartoon Astronaut T-Shirts",
      price: "$88"
    },
    {
      id: "3",
      image: "img/products/f3.jpg",
      name: "adidas2",
      branch: "Cartoon Astronaut T-Shirts",
      price: "$54"
    },
    {
      id: "4",
      image: "img/products/f4.jpg",
      name: "adidas3",
      branch: "Cartoon Astronaut T-Shirts",
      price: "$120"
    },
    {
      id: "5",
      image: "img/products/f5.jpg",
      name: "adidas4",
      branch: "Cartoon Astronaut T-Shirts",
      price: "$103"
    },
    {
      id: "6",
      image: "img/products/f6.jpg",
      name: "adidas5",
      branch: "Cartoon Astronaut T-Shirts",
      price: "$203"
    },
    {
      id: "7",
      image: "img/products/f7.jpg",
      name: "adidas6",
      branch: "Cartoon Astronaut T-Shirts",
      price: "$77"
    },
    {
      id: "8",
      image: "img/products/f8.jpg",
      name: "adidas7",
      branch: "Cartoon Astronaut T-Shirts",
      price: "$99"
    },

  ]

function loadData2(){
  {
    arr.forEach(function(value){
      $("#featureProduct").append("<div class='pro'><img src="+ value.image +" ><div class='des'><span>"+ value.name +" </span><h5> "+ value.branch +"  </h5><div class='star'><i class='fa fa-star checked'></i><i class='fa fa-star checked'></i><i class='fa fa-star checked'></i><i class='fa fa-star checked'></i><i class='fa fa-star checked'></i></div><h4>"+ value.price +"</h4></div><a href='#' data-name="+ value.name +" data-describe='"+ value.branch +"' data-price="+ value.price +" data-image="+ value.image +" class='add-to-cart btn btn-primary'><i class='fa fa-shopping-bag'style='font-size:36px'></i></a></div>");
    })
  }
}
loadData2()
// var arr = [
//   {
//     id: "9",
//     image: "img/products/n1.jpg",
//     name: "adidas",
//     branch: "Cartoon Astronaut T-Shirts",
//     price: "$78",
//     number:"22"
//   },
//   {
//     id: "10",
//     image: "img/products/n2.jpg",
//     name: "adidas",
//     branch: "Cartoon Astronaut T-Shirts",
//     price: "$88",
//     number:"33"
//   },
//   {
//     id: "11",
//     image: "img/products/n3.jpg",
//     name: "adidas",
//     branch: "Cartoon Astronaut T-Shirts",
//     price: "$54",
//     number:"99"
//   },
//   {
//     id: "12",
//     image: "img/products/n4.jpg",
//     name: "adidas",
//     branch: "Cartoon Astronaut T-Shirts",
//     price: "$120",
//     number:"88"
//   },
//   {
//     id: "13",
//     image: "img/products/n5.jpg",
//     name: "adidas",
//     branch: "Cartoon Astronaut T-Shirts",
//     price: "$103",
//     number:"77"
//   },
//   {
//     id: "14",
//     image: "img/products/n6.jpg",
//     name: "adidas",
//     branch: "Cartoon Astronaut T-Shirts",
//     price: "$203",
//     number:"66"
//   },
//   {
//     id: "15",
//     image: "img/products/n7.jpg",
//     name: "adidas",
//     branch: "Cartoon Astronaut T-Shirts",
//     price: "$77",
//     number:"55"
//   },
//   {
//     id: "16",
//     image: "img/products/n8.jpg",
//     name: "adidas",
//     branch: "Cartoon Astronaut T-Shirts",
//     price: "$99",
//     number:"44"
//   },

// ]

// function loadData(){
//   arr.forEach(function(obj){
//     $("#newarrival").append("<div class='pro'><img src="+ obj.image +"><div class='des'><span>"+ obj.name +" </span><h5> "+ obj.branch +"  </h5><div class='star'><i class='fa fa-star checked'></i><i class='fa fa-star checked'></i><i class='fa fa-star checked'></i><i class='fa fa-star checked'></i><i class='fa fa-star checked'></i></div><h4>"+ obj.price +" </h4></div><a href='#'data-name="+ obj.name +" data-describe="+ obj.branch +" data-price="+obj.price+" data-image="+obj.image+" class='add-to-cart btn btn-primary'><i class='fa fa-shopping-bag'style='font-size:36px'></i></a></div>");
//   })
// }
// loadData()


//Add item
$('.add-to-cart').click(function(event) {
  event.preventDefault();
  var name = $(this).data('name');
  var price = Number($(this).data('price'));
  var image = $(this).data('image');
  var describe =  $(this).data('describe');
  shoppingCart.addItemToCart(name, price,1,image,describe);
  displayCart();
  $('#mainCartIcon').text(shoppingCart.totalCount());
});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});