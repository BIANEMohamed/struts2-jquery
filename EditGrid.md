

# Simple Edit #

Create an Edit Action like this

```
public class EditGridEntry extends ActionSupport {

  private String              oper;
  private String              id;
  private String              name;
  private String              country;
  private String              city;
  private double              creditLimit;

  @Actions( {
    @Action(value = "/edit-grid-entry", results = {
        @Result(location = "simpleecho.jsp", name = "success"), @Result(location = "simpleecho.jsp", name = "input")
    })
  })
  public String execute() throws Exception
  {
    Customer customer;
    if (oper.equalsIgnoreCase("add"))
    {
      log.debug("Add Customer");
      customer = new Customer();
      customer.setName(name);
      customer.setCountry(country);
      customer.setCity(city);
      customer.setCreditLimit(creditLimit);

      CustomerDAO.save(customer);
    }
    else if (oper.equalsIgnoreCase("edit"))
    {
      log.debug("Edit Customer");

      customer = CustomerDAO.findById(Integer.parseInt(id));
      customer.setName(name);
      customer.setCountry(country);
      customer.setCity(city);
      customer.setCreditLimit(creditLimit);
      CustomerDAO.update(customer);
    }
    else if (oper.equalsIgnoreCase("del"))
    {
        customer = CustomerDAO.findById(Integer.parseInt(id));
        CustomerDAO.delete(customer);
      }
    }
  }
}
```

Specify an Edit Url in your JSP
```
<s:url var="editurl" action="edit-grid-entry"/>
```

And enable Edit by setting following attributes in your JSP

```
 <sjg:grid ... editurl="%{editurl}" ...>
```

then define which Column should be editable

```
<sjg:gridColumn ...
  editable="true" 
  edittype="<type>" 
  editoptions="{<options>}"
  editrules="{<rules>}"
... />
```

See [jqGrid Wiki](http://www.trirand.com/jqgridwiki/doku.php?id=wiki:common_rules)  for valid edit types,options,rules

## Example for an Edit Options ##
```
<sjg:gridColumn 
name="country" 
index="country" 
title="Country" 
editable="true" 
edittype="select" 
editoptions="{value:'France:France;USA:USA;Australia:Australia;Norway:Norway;Poland:Poland;Germany:Germany;Spain:Spain'}"/>
```

## Example for an Edit Rules ##
```
    	<sjg:gridColumn 	name="creditLimit" 
    					index="creditLimit" 
    					title="Credit Limit" 
    					editable="true" 
    					editrules="{
    									number: true, 
    									required: true, 
    									minValue : 100.0, 
    									maxValue : 10000.0
    								}" 
    					formatter="currency" />
```

# Inline Edit #

For Inline Editing set sj:grid attribute editinline to true.

```
    <sjg:grid ...
    	editurl="%{editurl}"
    	editinline="true"

    ... >

```


# Cell Edit #

## Create an Edit Action ##

```
public class EditCellEntry extends ActionSupport {

  private int              id;
  private double           creditLimit;

  @Actions( {
    @Action(value = "/edit-cell-entry", results = {
        @Result(location = "simpleecho.jsp", name = "success"), @Result(location = "simpleecho.jsp", name = "input")
    })
  })
  public String execute() throws Exception
  {

    Customer customer = CustomerDAO.findById(id);
    if(customer != null)
      customer.setCreditLimit(creditLimit);


    CustomerDAO.update(customer);

    return SUCCESS;
  }

  public int getId()
  {
    return id;
  }

  public void setId(int id)
  {
    this.id = id;
  }

  public double getCreditLimit()
  {
    return creditLimit;
  }

  public void setCreditLimit(double creditLimit)
  {
    this.creditLimit = creditLimit;
  }
}
```

## Enable Cell Edit in Grid ##

```
    <s:url var="editcellurl" action="edit-cell-entry"/> 
    <sjg:grid 
        ...
    	cellEdit="true"
    	cellurl="%{editcellurl}"
        ...
    >
```

## Set Columns editable ##

```
    	<sjg:gridColumn 	name="creditLimit" 
    					index="creditLimit" 
    					title="Credit Limit" 
    					editable="true" 
    					editrules="{
    									number: true, 
    									required: true, 
    									minValue : 100.0, 
    									maxValue : 10000.0
    								}" 
    					formatter="currency" 
    					sortable="true"/>
```