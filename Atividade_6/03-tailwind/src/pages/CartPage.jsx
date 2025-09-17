import React from "react";
import Button from "../components/Button";

export default function CartPage({
  cart,
  onUpdateQuantity,
  onRemove,
  onRemoveOne,
  onClose,
}) {
  const total = Object.values(cart).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full min-h-screen p-8 flex flex-col items-center" style={{backgroundColor: 'var(--bg-primary)'}}>
      <div className="flex items-center w-full max-w-2xl mb-8 gap-4">
        <Button
          variant="outline"
          onClick={onClose}
          aria-label="Voltar para página inicial"
          className="bg-red-500 hover:bg-red-600 text-gray-600 border-red-500 hover:border-red-600"
        >
          ← Voltar
        </Button>
        <h1 className="text-2xl font-semibold flex-grow text-center" style={{color: 'var(--text-primary)'}}>
          Carrinho
        </h1>
      </div>
      
      {Object.keys(cart).length === 0 ? (
        <p className="text-center text-xl mt-8" style={{color: 'var(--text-secondary)'}}>
          Seu carrinho está vazio
        </p>
      ) : (
        <div className="w-full max-w-4xl">
          <div className="flex flex-col gap-8 mb-8">
            {Object.values(cart).map((item) => (
              <div 
                key={item.id} 
                className="grid grid-cols-[auto_1fr_auto] gap-6 p-4 rounded-lg shadow-sm"
                style={{backgroundColor: 'var(--bg-secondary)'}}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-30 h-30 object-cover rounded-md"
                />
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium" style={{color: 'var(--text-primary)'}}>
                    {item.title}
                  </h3>
                  <p style={{color: 'var(--text-secondary)'}}>
                    R$ {item.price.toFixed(2)}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        onClick={() => onRemoveOne(item.id)}
                        aria-label="Diminuir quantidade"
                        className="px-3 py-1"
                      >
                        -
                      </Button>
                      <span className="min-w-8 text-center" style={{color: 'var(--text-primary)'}}>
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        aria-label="Aumentar quantidade"
                        className="px-3 py-1"
                      >
                        +
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      onClick={() => onRemove(item.id)}
                      aria-label="Remover item"
                      className="text-red-600 hover:text-white hover:bg-red-600"
                    >
                      Remover
                    </Button>
                  </div>
                </div>
                
                <div className="text-lg font-medium self-center" style={{color: 'var(--text-primary)'}}>
                  R$ {(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t-2 pt-6 mt-8 flex justify-between items-center" style={{borderColor: 'var(--border-color)'}}>
            <h2 className="text-xl font-semibold" style={{color: 'var(--text-primary)'}}>
              Total do Carrinho
            </h2>
            <p className="text-2xl font-semibold" style={{color: 'var(--text-primary)'}}>
              R$ {total.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}