<<<<<<< HEAD
# dynamic-filter
A reusable filter build in Ionic-Angular
=======
# DynamicFilterComponent

## Descripción
El componente `DynamicFilterComponent` es un modal independiente en Ionic-Angular que permite aplicar filtros dinámicos sobre una lista de categorías. Está diseñado para ser reutilizable, generando de forma dinámica los selectores basados en las categorías pasadas como entrada. También cuenta con la funcionalidad de aplicar y limpiar los filtros mediante formularios reactivos.

## Estructura del Componente

1. **Modal** (`<ion-modal>`): 
   - El modal se despliega con un disparador (`triggerId`) y muestra un formulario con varios selectores, basados en las categorías proporcionadas.
   
2. **Header** (`<ion-header>`): 
   - Muestra un título dinámico proporcionado mediante la propiedad `@Input() title`.

3. **Content** (`<ion-content>`): 
   - Contiene un formulario con múltiples selectores generados dinámicamente según las categorías definidas en la propiedad `@Input() categories`.

4. **Footer** (`<ion-footer>`): 
   - Contiene botones para cerrar el modal, limpiar los filtros o aplicar los filtros seleccionados.

## Estructura de Clases y Decoradores

- **`@Component`**: 
  - Define al componente como autónomo (`standalone: true`), lo que permite que se importe directamente sin necesidad de un módulo.
  - Los módulos de Ionic y Angular necesarios para el funcionamiento del componente (como formularios y componentes de interfaz) se importan dentro del mismo.

## Propiedades del Componente

1. **@Input() title: string**:
   - Define el título que aparecerá en el encabezado del modal. Por defecto, se inicializa como `'Filter'`.

2. **@Input() triggerId: string**: 
   - Identificador que se utiliza para disparar la apertura del modal.

3. **@Input() categories: FilterCategory[]**: 
   - Un array de objetos que define las categorías para los filtros. Cada categoría debe seguir la estructura de `FilterCategory` que contiene al menos:
     - `name`: nombre de la categoría (que se utiliza para los `formControlName`).
     - `current`: valor actual seleccionado.
     - `values`: opciones de selección disponibles para esa categoría.

4. **@Output() applyFilter: EventEmitter<any>**: 
   - Emite un evento cuando se aplican los filtros, enviando el valor del formulario con los filtros seleccionados. También emite `null` cuando los filtros se limpian.

5. **filterForm: FormGroup**: 
   - Formulario reactivo que se inicializa en el método `initForm` y contiene los controles dinámicos para las categorías.

## Métodos del Componente

1. **ngOnInit()**:
   - Método del ciclo de vida de Angular que se ejecuta una vez que el componente ha sido inicializado.
   - Llama al método `initForm` para inicializar el formulario reactivo con los controles correspondientes a las categorías.

2. **initForm()**:
   - Inicializa el formulario (`filterForm`) vacío y luego agrega controles dinámicos para cada categoría.
   - Utiliza `FormBuilder` para crear un control para cada categoría, cuyo valor inicial es el valor actual (`current`) de la categoría.

3. **apply()**:
   - Se llama cuando el usuario hace clic en el botón "Apply". 
   - Emite los valores actuales del formulario a través del `applyFilter` para que los filtros sean aplicados en la vista o el conjunto de datos correspondiente.

4. **clear()**:
   - Limpia los valores seleccionados en el formulario llamando al método `reset()` en el `filterForm`.
   - Después, emite `null` a través de `applyFilter`, indicando que se han borrado los filtros.

## Tipos y Modelos Asociados

- **FilterCategory**: 
  - Se refiere a un tipo de dato que debería estar definido en el archivo `types.ts` bajo el directorio `core/types`. Este tipo define la estructura de cada categoría usada en el filtro:
  
```typescript
interface FilterCategory {
  name: string;
  current: string;
  values: string[];
}
```

## Ejemplo de Uso

```html
<app-dynamic-filter
  [title]="'Filter Items'"
  [triggerId]="'openFilterModal'"
  [categories]="filterCategories"
  (applyFilter)="onApplyFilter($event)">
</app-dynamic-filter>
```

```typescript
const filterCategories: FilterCategory [] =   = [
    {
        name: 'status',
        values: ['alive', 'dead', 'unknown'],
        current: null,
    },
    {
        name: 'gender',
        values: ['female', 'male', 'genderless', 'unknown'],
        current: null,
    }
]
```
>>>>>>> master
